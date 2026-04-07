# Web Backend-Guide

Notion API, Docusaurus, Netlify를 기반으로 한 웹 백엔드 가이드입니다.  
Notion에 작성한 문서를 자동으로 Docusaurus로 변환하여 정적 사이트로 배포합니다.

## Local Start

```bash
npm run start
## Local Start

```bash
npm run start
```

## Notion Sync

```bash
# 노션 가이드 최신 갱신
npm run notion:sync
```

## Build

```bash
# 패키지 빌드
npm run build
```

## Project Structure

docs/ # Docusaurus 문서
scripts/ # Notion sync 스크립트
src/ # 사이트 코드

## Environment Variables

다음 값을 설정해야 합니다.

- NOTION_TOKEN
- NOTION_PAGE_ID

로컬에서는 `.env` 파일을 사용하고,  
배포 환경에서는 GitHub Actions Secrets를 사용합니다.

## Workflow

1. Notion에 문서 작성
2. GitHub Actions가 주기적으로 실행
3. Notion 데이터를 Markdown으로 변환
4. docs/에 반영 후 자동 커밋
5. Netlify가 빌드 및 배포

## Deployment

Netlify를 통해 자동 배포됩니다.  
GitHub 저장소와 연동되어 변경 시 자동으로 빌드됩니다.
