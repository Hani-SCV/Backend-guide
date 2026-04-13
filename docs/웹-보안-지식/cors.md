---
title: "CORS"
sidebar_position: 6
slug: "/웹-보안-지식/cors"
---


---


### 개념


> - 브라우저가 서로 다른 출처(origin) 간의 리소스 요청을 제어하는 보안 메커니즘  
>   
> - 스크립트가 허용된 도메인에서만 데이터에 접근하도록 제한


### 주요 헤더

- **Access-Control-Allow-Origin**

    클라이언트 요청 출처 허용 (`*` 또는 도메인 지정)

- **Access-Control-Allow-Methods**

    허용할 HTTP 메서드(GET, POST, PUT 등)

- **Access-Control-Allow-Headers**

    허용할 요청 헤더(Content-Type, Authorization 등)

- **Access-Control-Allow-Credentials**

    쿠키·인증 정보 포함 허용 (`true`/`false`)

- **Access-Control-Max-Age**

    사전 요청(preflight) 결과 캐시 지속 시간(초)


### 동작 흐름

1. **단순 요청**: 브라우저가 요청 → 응답 헤더 확인 후 바로 리소스 사용
2. **사전 요청(preflight)**: 복잡 요청 시 OPTIONS 메서드로 서버에 허용 여부 확인
3. 서버가 CORS 헤더 포함 응답 → 브라우저가 본 요청 수행

### 활용 팁

- API 서버와 웹 클라이언트 출처가 다를 때 필수 설정
- `Allow-Origin`에  사용 시 인증 정보 제외
- 쿠키 포함 시 `Allow-Credentials: true` + 특정 도메인만 허용
- 사전 요청 트래픽 고려해 `Max-Age` 적절히 설정

### 주의사항

- 와 `Allow-Credentials: true`를 함께 사용할 수 없음
- 브라우저 보안 정책이므로 서버 설정만으로 해결
- 잘못된 설정 시 CSRF·XSS 공격 벡터가 될 수 있음
