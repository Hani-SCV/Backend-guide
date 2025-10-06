---
sidebar_position: 3
---

# Basic

### 🔍 개념

> Basic 인증은 HTTP 요청 헤더에 사용자명·비밀번호를 Base64 인코딩해 전달하는 방식  
> Authorization 헤더에 `Basic <credentials>` 형식으로 삽입

### ⚙️ 동작 흐름

1. 클라이언트 → 서버 요청
2. 서버 → 클라이언트 응답
    - 상태 코드 401
    - 헤더 `WWW-Authenticate: Basic realm="Username Password Realm"`
3. 클라이언트
    - `username:password`를 Base64 인코딩
    - 요청 헤더에 `Authorization: Basic dXNlcjpwYXNz` 추가
4. 서버
    - 헤더 디코딩 후 자격 증명 검증
    - 유효하면 200 OK, 아니면 401/403 반환

### 🔑 주요 헤더

- Authorization
  - 형식 `Basic <Base64(username:password)>`
- WWW-Authenticate
  - 형식 `Basic realm="설정된 영역 이름"`
- 상태 코드
  - 401 Unauthorized (인증 필요)
  - 403 Forbidden (인증은 됐으나 권한 부족)

### 🛠 코드 예시 (curl)

```bash
# 1) 최초 요청 (401 응답)
curl -i https://api.example.com/data

# 2) 인증 포함 요청
curl -i \
  -H "Authorization: Basic $(echo -n 'user:pass' | base64)" \
  https://api.example.com/data
```

### ✅ 장점

- 구현·이해가 매우 간단
- 추가 라이브러리 불필요

### ⚠️ 단점 및 보안 고려

- Base64는 인코딩일 뿐 암호화 아님 → 평문 노출 위험
- HTTPS 필수 적용
- 브라우저 캐시로 자격 증명 노출 우려 → 세션 종료 시 캐시 무효화 필요
- 무차별 대입 공격 취약 → Rate Limiting, 계정 잠금 정책 적용
- 토큰 기반 인증(JWT/OAuth2) 선호

### 🚀 Tip

- 사내 내부 서비스나 테스트용으로만 제한 적용
- 민감 API는 Basic 인증 대신 Token 인증 전환
- API 게이트웨이에서 IP 화이트리스트, 요청 속도 제한 구성