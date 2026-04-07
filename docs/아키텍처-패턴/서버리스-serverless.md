---
title: "서버리스 (Serverless)"
sidebar_position: 5
slug: "/아키텍처-패턴/서버리스-serverless"
---


---


### 🧠 개념

- 서버 관리를 직접 하지 않고 클라우드가 인프라 운영을 맡음
- 함수 단위 코드 실행, 이벤트 기반 작동
- 자동 확장 및 사용한 만큼 과금

---


### ⚙️ 특징

- 무서버 운영, 인프라 관리 부담 감소
- 콜드 스타트 문제 존재
- 상태 비저장(Stateless) 환경
- 실행 시간 제한(예: AWS Lambda 15분)

---


### ✅ 장점

- 빠른 개발 및 배포
- 비용 효율적
- 자동 확장

---


### ⚠️ 단점

- 콜드 스타트로 인한 초기 지연
- 상태 유지 어려움
- 복잡한 아키텍처 시 디버깅 어려움

---


### 🛠 주요 서비스

- AWS Lambda, Azure Functions, Google Cloud Functions, Firebase Functions
