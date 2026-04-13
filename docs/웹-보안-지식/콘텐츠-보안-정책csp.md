---
title: "콘텐츠 보안 정책(CSP)"
sidebar_position: 5
slug: "/웹-보안-지식/콘텐츠-보안-정책csp"
---


---


### 개념


> - CSP(Content Security Policy)는 브라우저가 허용된 리소스 출처만 로드·실행하도록 제한하는 보안 헤더  
>   
> - XSS, 데이터 인젝션, 클릭재킹 등 공격을 방어


### 주요 지시자(Directives)

- **default-src**

    모든 리소스의 기본 출처 지정

- **script-src**

    허용된 스크립트 출처(도메인, nonce, 해시) 지정

- **style-src**

    스타일시트 출처 지정

- **img-src**

    이미지 출처 지정

- **connect-src**

    AJAX/WebSocket 등 네트워크 요청 출처 지정

- **frame-ancestors**

    페이지를 포함할 수 있는 부모 출처 지정 (클릭재킹 방어)


### 보안 고려사항

- `'self'`, 도메인, nonce/hash 방식을 활용해 **허용 목록(whitelist)** 구성
- `'unsafe-inline'`, `'unsafe-eval'` 사용 최소화
- 스크립트·스타일 해시(hash) 또는 nonce 방식 적용 시 **인라인 코드도 안전하게 허용**
- CSP 위반 리포팅(`Content-Security-Policy-Report-Only`)으로 사전 테스트

### 주의사항

- 정책이 너무 엄격하면 정상 기능 중단 가능
- CSP 적용 전 리포트 전용 모드로 테스트 필수
- ajax, 폰트, 웹폰트, iframe 등 추가 리소스는 별도 지시자에 포함해야 함

### 팁

- 빌드 도구(Webpack, Rollup)로 스크립트 해시 자동 생성
- 서버 설정(Apache <code>Header</code>, Nginx <code>add_header</code>)에 CSP 헤더 추가
- 정책 관리가 복잡해지면 CSP 관리 도구(CSP Evaluator, Report URI) 활용
