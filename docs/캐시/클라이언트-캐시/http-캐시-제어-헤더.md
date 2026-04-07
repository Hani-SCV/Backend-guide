---
title: "HTTP 캐시 제어 헤더"
sidebar_position: 2
slug: "/캐시/클라이언트-캐시/http-캐시-제어-헤더"
---


---


### 🔍 개념

- HTTP 캐시 제어 헤더는 브라우저와 중간 캐시 서버가 리소스 저장 및 재사용 방식을 결정하는 지침
- 캐시 동작을 세밀하게 제어해 효율성과 최신성 균형 맞춤

---


### ⚙️ 주요 헤더 종류

- **Cache-Control**
    - `max-age` : 캐시 유효 시간(초 단위) 지정
    - `no-cache` : 반드시 서버에서 재검증 후 사용
    - `no-store` : 캐시 저장 금지
    - `public` : 모든 캐시 저장 허용
    - `private` : 사용자별 캐시만 허용
    - `must-revalidate` : 만료 후 반드시 서버 검증 필요
- **Expires**
    - HTTP/1.0 캐시 만료 날짜 지정
    - `Cache-Control`이 있으면 무시됨
- **ETag**
    - 리소스 고유 식별자 태그 (해시 등)
    - 조건부 요청에 활용 (`If-None-Match`)
- **Last-Modified**
    - 리소스 최종 수정 시각
    - 조건부 요청에 활용 (`If-Modified-Since`)
- **Pragma**
    - 과거 HTTP/1.0 호환용, `no-cache` 역할

---


### ✅ 활용 팁

- `Cache-Control` 헤더 우선 적용 권장
- 민감 데이터엔 `no-store` 혹은 `private` 필수
- 오래 변하지 않는 정적 파일엔 `max-age`와 `immutable` 조합 효과적
- `ETag`와 `Last-Modified`는 서버 부하 줄이면서 리소스 최신성 보장
