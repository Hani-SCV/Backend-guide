---
sidebar_position: 6
---

# OpenID

### 🔑 개념

> OpenID Connect 는 OAuth 2.0 기반 분산 인증 프로토콜  
> 중앙 인증 서버(IdP)에서 로그인 처리 후 RP(응용 서비스)에 사용자 정보(ID 토큰) 전달  
> 목표 : 단일 로그인(SSO), 사용자 편의성 및 보안 강화

### ⚙️ 동작 흐름 (Authorization Code)

1. RP → IdP /authorize 요청
    - client_id, redirect_uri, response_type=code, scope=openid 포함

2. IdP : 사용자 인증 화면 제공 → 로그인
3. IdP → RP redirect
    - 쿼리 파라미터 code

4. RP → IdP /token 요청
    - grant_type=authorization_code, code, client_secret 등
5. IdP → RP 응답
    - id_token (JWT), access_token, refresh_token
6. RP → IdP /userinfo 요청 (access_token)
7. IdP → RP 사용자 프로필 반환

### ⚙️ 주요 엔드포인트 (Discovery)

- `/.well-known/openid-configuration`

    •issuer, authorization_endpoint, token_endpoint, userinfo_endpoint, jwks_uri 등 메타데이터 제공

- `/authorize`
- `/token`
- `/userinfo`
- `/jwks` (JWKS URI)

### 🔄 토큰 및 클레임

- id_token

    • JWT 형식, sub (사용자 식별), iss, aud, exp, iat 포함

    • nonce 검증으로 재생 공격 방지

- access_token

    • API 호출 용

- refresh_token

    • 토큰 갱신 용

- 주요 클레임

    • email, name, picture 등 표준(OIDC profile, email scope)

### ✅ 장점

- SSO 구현으로 사용자 경험 개선
- OAuth 2.0 기반으로 권한 위임과 결합 가능
- JWT 사용으로 서명·위변조 방지 및 분산 환경에 적합

### ⚠️ 주의사항

- HTTPS 필수
- client_secret 유출 주의
- id_token 서명·nonce·aud 검증 필수
- refresh_token 보관·회전 전략 수립

### 🛠 Tip

- Discovery 로 동적 설정 관리
- JWKS 캐싱 및 키 교체 대응
- 다중 IdP 연동 시 federation 도입
- 사용자 프로비저닝·싱크 로직 고려
