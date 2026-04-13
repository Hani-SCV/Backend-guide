---
title: "JWT"
sidebar_position: 5
slug: "/api-인증/jwt"
---


---


### 개념


> - JSON 포맷 기반 자체 서명 토큰  
>   
> - 인증과 정보 교환에 사용  
>   
> - 서버에 세션 저장 불필요 → stateless 인증 가능


### 구조

1. Header
    - typ: JWT
    - alg: 서명 알고리즘 (HS256, RS256 등)
2. Payload
    - 클레임 포함
        - Registered (iss, sub, aud, exp, nbf, iat, jti)
        - Public (application specific)
        - Private (custom)
3. Signature
    - Base64Url(header) . Base64Url(payload) 를 비밀키/개인키로 서명한 값
    - 변조 방지

### 동작 흐름

1. 로그인 성공 → 서버에서 JWT 생성
2. 클라이언트에 전달 → 로컬 스토리지 또는 HttpOnly 쿠키에 저장
3. 이후 요청마다 Authorization 헤더에 Bearer 토큰 포함
4. 서버는 signature, exp, iss, aud, alg 일치 여부 등 검증 → 요청 처리

### 표준 클레임

- iss (issuer): 발급자
- sub (subject): 토큰 주체 식별자
- aud (audience): 토큰 대상
- exp (expiration): 만료 시각(UNIX timestamp)
- nbf (not before): 지정 시간 이전 사용 금지
- iat (issued at): 발급 시각
- jti (JWT ID): 토큰 고유 식별자

### 보안 고려사항

- alg none 취약점 주의 → 알고리즘 고정 검증
- HS256 vs RS256
    - HS256: 대칭키 서명
    - RS256: 공개키/개인키 서명
- issuer, audience 필드 검증
- exp, nbf, iat 값 검사
- 토큰 회전(token rotation) 및 refresh token pairing
- 토큰 블랙리스트 또는 jti 기반 무효화 전략
- 키 교체(key rotation)와 JWKS 엔드포인트 활용

### 장단점

- 장점
    - 서버 부하 감소(stateless)
    - 별도 DB 조회 최소화
    - 다양한 플랫폼 간 호환
- 단점
    - 탈취 시 만료 전까지 유효
    - 토큰 크기 증가
    - 즉각 무효화 어려움
