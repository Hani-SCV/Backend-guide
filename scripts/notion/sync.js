import "dotenv/config";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import fs from "fs";
import path from "path";
import pLimit from 'p-limit';

const limit = pLimit(5);
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });
const INDEX_PAGE_ID = process.env.NOTION_PAGE_ID;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function slugify(text) {
  return text.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-가-힣]/g, "");
}

function extractPageId(url) {
  const match = url.match(/([a-f0-9]{32})/);
  return match ? match[1] : null;
}

// 블록에서 페이지 ID 추출하는 헬퍼 함수
function extractIdsFromBlock(block) {
  const ids = [];
  if (block.type === "child_page") {
    ids.push(block.id.replace(/-/g, ""));
  }
  
  const content = block[block.type];
  if (content && content.rich_text) {
    content.rich_text.forEach(item => {
      if (item.href) {
        const pageId = extractPageId(item.href);
        if (pageId) ids.push(pageId);
      }
    });
  }
  return ids;
}

async function getFullBlocks(blockId) {
  let allBlocks = [];
  let hasMore = true;
  let cursor = undefined;

  while (hasMore) {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });
    
    allBlocks.push(...response.results);
    hasMore = response.has_more;
    cursor = response.next_cursor;
    if (hasMore) await sleep(100); // 연속 호출 방지
  }
  return allBlocks;
}

async function parseIndexPage() {
  const allPages = [];
  const processedIds = new Set();
  
  let h2Category = "";
  let h3Category = "";
  let h2Count = 0;
  let h3Count = 0;
  const pathPositionMap = {}; 

  async function traverseBlocks(blocks, h2, h3) {
    for (const block of blocks) {
      if (block.type === "heading_2") {
        h2Count += 10;
        h2Category = block.heading_2.rich_text.map(t => t.plain_text).join("").trim();
        h3Category = ""; 
        h3Count = 0;
        writeCategoryJson(slugify(h2Category), h2Category, h2Count);
      } 
      else if (block.type === "heading_3") {
        h3Count += 1;
        h3Category = block.heading_3.rich_text.map(t => t.plain_text).join("").trim();
        const h3Path = path.join(slugify(h2Category), slugify(h3Category));
        writeCategoryJson(h3Path, h3Category, h3Count);
      }

      const foundIds = extractIdsFromBlock(block);
      foundIds.forEach(id => {
        if (!processedIds.has(id)) {
          const categoryPath = path.join(slugify(h2Category || "etc"), slugify(h3Category || ""));
          
          pathPositionMap[categoryPath] = (pathPositionMap[categoryPath] || 0) + 1;

          allPages.push({ 
            pageId: id, 
            categoryPath: categoryPath,
            position: pathPositionMap[categoryPath]
          });
          processedIds.add(id);
        }
      });

      if (block.has_children && block.type !== "child_page") {
        await traverseBlocks(await getFullBlocks(block.id), h2, h3);
      }
    }
  }

  await traverseBlocks(await getFullBlocks(INDEX_PAGE_ID), "", "");
  return allPages;
}

async function convertPage(pageId, retryCount = 0) {
  try {
    await sleep(400); 
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdBlocks);
    const page = await notion.pages.retrieve({ page_id: pageId });
    
    const title = page.properties?.title?.title?.[0]?.plain_text || 
                  page.properties?.Name?.title?.[0]?.plain_text || 
                  "untitled";

    return { title, content: mdString.parent };
  } catch (error) {
    if ([429, 502, 504].includes(error.status) && retryCount < 5) {
      const waitTime = Math.pow(2, retryCount) * 1000;
      console.warn(`재시도 중 [${error.status}] (${retryCount + 1}/5): ${pageId}`);
      await sleep(waitTime);
      return await convertPage(pageId, retryCount + 1);
    }
    console.error(`실패 [${pageId}]: ${error.message}`);
    return null;
  }
}

// 카테고리 설정 파일 생성 함수
function writeCategoryJson(categoryPath, label, position) {
  const dir = path.join("docs", categoryPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const categoryFilePath = path.join(dir, "_category_.json");
  
  const config = {
    label: label,
    position: position,
    link: {
      type: "generated-index",
      description: `${label}에 관한 문서 모음입니다.`
    }
  };

  const newContent = JSON.stringify(config, null, 2);
  
  if (fs.existsSync(categoryFilePath)) {
    if (fs.readFileSync(categoryFilePath, "utf-8") === newContent) return;
  }

  fs.writeFileSync(categoryFilePath, newContent);
  console.log(`CATEGORY: ${categoryFilePath} 생성 완료`);
}

function writeDoc(categoryPath, title, content, position) {
  const slug = slugify(title);
  const dir = path.join("docs", categoryPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(dir, `${slug}.md`);
  
  const frontmatter = [
    "---",
    `title: "${title}"`,
    `sidebar_position: ${position}`,
    `slug: "/${categoryPath}/${slug}"`,
    "---",
    "\n"
  ].join("\n");

  const finalContent = frontmatter + content;

  if (fs.existsSync(filePath)) {
    if (fs.readFileSync(filePath, "utf-8") === finalContent) {
      console.log(`SKIP: ${filePath}`);
      return;
    }
  }
  fs.writeFileSync(filePath, finalContent);
  console.log(`WRITE: ${filePath} (pos: ${position})`);
}
async function run() {
  try {
    const pages = await parseIndexPage();
    console.log(`분석 완료: 총 ${pages.length}개의 항목을 발견했습니다.`);

    for (const page of pages) {
      const result = await convertPage(page.pageId);
      if (result) {
        writeDoc(page.categoryPath, result.title, result.content, page.position);
      }
    }
    console.log("작업 완료");
  } catch (err) {
    console.error("에러:", err);
  }
}

run();