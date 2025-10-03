---
sidebar_position: 2
---

# JSON API

### 🔍 정의

- JSON API는 RESTful API 구현을 위한 표준 사양
- 목표: 클라이언트·서버 간 데이터 교환에 일관된 구조와 규칙 제공

### ⚙️ 주요 원칙

1. 미디어 타입: `application/vnd.api+json`
2. 리소스 객체는 반드시 `type`과 `id` 포함
3. 최상위 키로 `data` / `errors` / `meta` / `links` / `included` 허용
4. 리소스 간 관계는 `relationships` 블록에 명시
5. 연관 리소드를 포함하려면 `included` 배열 사용

### 🔑 리소스 객체 구조 예시

```json
{
  "data": {
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON API 규격 소개",
      "content": "표준화된 API 구조"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "9" },
        "links": {
          "self": "/articles/1/relationships/author",
          "related": "/articles/1/author"
        }
      }
    },
    "links": {
      "self": "/articles/1"
    }
  }
}
```

### 🛠️ 요청·응답 예시

- 요청 헤더
    - `Content-Type: application/vnd.api+json`
    - `Accept: application/vnd.api+json`
- POST 생성 예시
    
    ```
    POST /articles
    Content-Type: application/vnd.api+json
    
    {
      "data": {
        "type": "articles",
        "attributes": {
          "title": "새 글",
          "content": "내용"
        }
      }
    }
    ```
    
- 응답 예시 (201 Created)
    
    ```json
    {
      "data": {
        "type": "articles",
        "id": "2",
        "attributes": {
          "title": "새 글",
          "content": "내용"
        },
        "links": {
          "self": "/articles/2"
        }
      }
    }
    ```

### 🔄 페이징·필터링·정렬 예시

- 페이징
    
    ```
    GET /articles?page[number]=2&page[size]=10
    ```
    
- 필터링
    
    ```
    GET /articles?filter[author]=9
    ```
    
- 정렬
    
    ```
    GET /articles?sort=-createdAt,title
    ```
    
- 응답에 `meta`와 `links` 포함
    
    ```json
    {
      "meta": { "total": 50 },
      "links": {
        "first": "/articles?page[number]=1&page[size]=10",
        "next": "/articles?page[number]=3&page[size]=10",
        "last": "/articles?page[number]=5&page[size]=10"
      },
      "data": [ … ]
    }
    ```

### 🔗 포함(include) 예시

```
GET /articles?include=author,comments.author
```

```json
{
  "data": [ … ],
  "included": [
    { "type": "people", "id": "9", "attributes": { "name": "하니" } },
    { "type": "comments", "id": "5", … },
    { "type": "people", "id": "2", … }
  ]
}
```

### ⚠️ 에러 처리 예시

```json
{
  "errors": [
    {
      "status": "400",
      "code": "INVALID_ATTRIBUTE",
      "title": "잘못된 입력",
      "detail": "title 필드는 비어 있을 수 없습니다",
      "source": { "pointer": "/data/attributes/title" }
    }
  ]
}
```

### 🎯 추가 보완 포인트

- *필드 선택(sparse fieldsets)*
    
    ```
    GET /articles?fields[articles]=title,author
    ```
    
- *관계 링크와 자기 링크 분리*
    - `/articles/1/relationships/author`
    - `/articles/1/author`
- *버전 관리*
    - API 버전 정보는 `media type` 또는 `links` 메타데이터에 명시