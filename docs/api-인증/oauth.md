---
title: "OAuth"
sidebar_position: 2
slug: "/api-인증/oauth"
---


---


### 🔍 개념

- OAuth 2.0 은 제 3자 애플리케이션이 사용자 자격 증명 없이 리소스 서버 데이터에 안전하게 접근하도록 권한을 위임하는 프로토콜
- 토큰 기반으로 최소 권한 원칙 적용한 안전한 인증·인가

---


### ⚙️ 주요 역할

1. 👤 Resource Owner: 자원 소유자(사용자)
2. 📱 Client: 권한 위임 요청 애플리케이션
3. 🔐 Authorization Server: 인증·인가 코드를 발급하고 토큰 발행
4. 🗄️ Resource Server: 보호된 API 제공, Access Token 유효성 검사

---


### 🔑 Grant Type 및 흐름 예시


| Grant Type                          | 설명                     | 사용 사례         |
| ----------------------------------- | ---------------------- | ------------- |
| Authorization Code                  | 사용자 로그인 후 받은 코드로 토큰 요청 | 웹 애플리케이션      |
| PKCE (Proof Key for Code Exchange)  | 코드 탈취 방지용 Salt 추가      | 모바일·SPA       |
| Client Credentials                  | 클라이언트 자격증명으로 직접 토큰 요청  | 서버 간 통신 (M2M) |
| Resource Owner Password Credentials | 사용자 아이디·비밀번호로 토큰 요청    | 신뢰된 내부 시스템    |
| Refresh Token                       | 만료된 Access Token 재발급   | 장기 세션 유지      |


---


### 🔄 Authorization Code 흐름 (PKCE 포함)

1. 클라이언트 → AS: authorization request

    ```plain text
    GET /authorize?
      response_type=code
      &client_id=abc
      &redirect_uri=https://app/callback
      &scope=read write
      &code_challenge=xyz
      &code_challenge_method=S256
    ```

2. AS → 클라이언트: redirect with code

    ```plain text
    HTTP/1.1 302 Redirect
    Location: https://app/callback?code=AUTH_CODE
    ```

3. 클라이언트 → AS: token request

    ```plain text
    POST /token
    grant_type=authorization_code
    &code=AUTH_CODE
    &redirect_uri=https://app/callback
    &client_id=abc
    &code_verifier=original_verifier
    ```

4. AS → 클라이언트: 토큰 응답

    ```json
    {
      "access_token": "ACCESS123",
      "token_type": "Bearer",
      "expires_in": 3600,
      "refresh_token": "REFRESH456",
      "scope": "read write"
    }
    ```


---


### 🔄 Client Credentials 흐름


```plain text
POST /token
grant_type=client_credentials
&client_id=abc
&client_secret=secret
&scope=service.read
```


---


### 🛠 엔드포인트 예시

- /authorize : 권한 요청 및 인증
- /token : 토큰 발행
- /revoke : 토큰 폐기
- /introspect : 토큰 유효성 확인
- /userinfo : 사용자 정보 조회 (OIDC)

---


### ⚙️ 토큰 구조

- Access Token
    - Bearer 타입, 짧은 유효기간
- Refresh Token
    - 긴 유효기간, Access Token 재발급 용
- ID Token (OIDC)
    - JWT 포맷, 사용자 클레임 포함

---


### ⚠️ 보안 고려사항

- HTTPS 필수
- PKCE 사용으로 코드 탈취 방지
- 토큰 저장은 HttpOnly 쿠키 또는 안전한 스토리지
- 스코프 최소화: 필요한 권한만 요청
- 토큰 만료·갱신 정책 명확화
- CORS 정책 엄격 설정
- 토큰 재생 공격 방지: nonce, jti 클레임 활용

---


### 🔍 추가 보완 포인트

- 사용자 로그아웃 시 refresh token 블랙리스트 처리
- 토큰 회전(Token Rotation) 전략
- 동시 로그인·세션 관리 정책
