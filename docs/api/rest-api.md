---
title: "REST API"
sidebar_position: 1
slug: "/api/rest-api"
---


---


### 개념


> - REST(Representational State Transfer) 는 웹 아키텍처 스타일  
>   
> - 리소스를 URI 로 표현하고 HTTP 메서드로 상태를 조작  
>   
> - 목표: 단순성, 확장성, 유연성


### 핵심 제약 조건

1. Client–Server: 클라이언트와 서버 책임 분리
2. Stateless: 요청 간 서버에 상태 정보 저장 금지
3. Cacheable: 응답 캐싱으로 성능 최적화
4. Uniform Interface: 일관된 인터페이스
5. Layered System: 계층화된 시스템 구조 허용
6. Code on Demand (선택): 클라이언트 실행 코드 전송 허용

### HTTP 메서드 매핑


| 메서드    | 동작    | 멱등성 |
| ------ | ----- | --- |
| GET    | 조회    | O   |
| POST   | 생성    | X   |
| PUT    | 전체 수정 | O   |
| PATCH  | 부분 수정 | X   |
| DELETE | 삭제    | O   |


### URI 설계 원칙

- 리소스는 명사로: `/users, /orders/123`
- 계층적 관계: `/users/{userId}/orders`
- 소문자 · 하이픈: `/order-items`
- 필터링·정렬·페이징은 쿼리 파라미터

    GET `/products?category=books&sort=-price&page=2&size=20`


### HTTP 상태 코드

- 2xx: 성공 (200 OK, 201 Created, 204 No Content)
- 4xx: 클라이언트 오류 (400 Bad Request, 401 Unauthorized, 404 Not Found)
- 5xx: 서버 오류 (500 Internal Server Error, 503 Service Unavailable)

### 에러 응답 표준


```json
{
  "error": {
    "status": 400,
    "code": "INVALID_INPUT",
    "message": "userId is required",
    "details": [
      { "field": "userId", "issue": "missing" }
    ]
  }
}
```


### 페이징 메타데이터


```json
{
  "data": [ … ],
  "meta": {
    "page": 2,
    "size": 10,
    "totalItems": 95,
    "totalPages": 10
  },
  "links": {
    "first": "/items?page=1&size=10",
    "prev": "/items?page=1&size=10",
    "next": "/items?page=3&size=10",
    "last": "/items?page=10&size=10"
  }
}
```


### HATEOAS

- 응답에 하이퍼링크 제공
- 클라이언트는 링크를 따라 다음 상태로 전이

```json
{
  "id": 123,
  "name": "Alice",
  "links": {
    "self": "/users/123",
    "orders": "/users/123/orders"
  }
}
```


### 버전 관리 · 보안 · 품질

- 버전 관리
    - URI 버전: /v1/users
    - 헤더 버전: Accept-Version: v1
- 인증·인가
    - OAuth2, JWT 사용
    - 인증 토큰은 Authorization 헤더에 Bearer 스킴
- HTTPS 사용으로 전송 암호화
- CORS 설정으로 도메인 접근 제어
- Idempotency-Key 헤더로 중복 요청 방지

### 문서화·테스트·모니터링

- OpenAPI (Swagger) 스펙으로 문서 자동 생성
- Postman Collection / Swagger UI 제공
- 요청·응답 로깅, API 게이트웨이로 레이트 리밋·트래픽 제어
- 모니터링 지표: 응답 시간 · 오류율 · 사용량
