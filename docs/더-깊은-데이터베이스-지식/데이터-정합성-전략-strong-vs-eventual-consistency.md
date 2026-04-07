---
title: "데이터 정합성 전략 (Strong vs Eventual Consistency)"
sidebar_position: 7
slug: "/더-깊은-데이터베이스-지식/데이터-정합성-전략-strong-vs-eventual-consistency"
---


---


### 데이터 정합성 (Data Consistency)

- 데이터가 **정확하고 일관된 상태로 유지**되는 것
- 다중 시스템, 분산 환경에서 데이터 충돌이나 불일치 없이 유지됨

---


### Strong Consistency (강한 정합성)

- **모든 노드가 항상 동일한 최신 데이터 상태**를 유지
- 쓰기 작업이 완료되면 **모든 사용자에게 즉시 반영**
- **ACID 트랜잭션 기반 시스템**에서 일반적

**특징**

- 최신 데이터 즉시 읽기 가능
- 일관성 우선 → 지연(latency) 증가 가능
- **실시간 금융 거래**, **재고 시스템** 등에 필수

---


### Eventual Consistency (최종적 정합성)

- 모든 노드가 **시간이 지나면 동일한 상태**로 수렴
- 데이터 반영까지 지연 가능 → **일시적 불일치 허용**
- **BASE 모델**: Basically Available, Soft state, Eventually consistent

**특징**

- **높은 가용성, 빠른 응답 속도**
- 일관성보다 성능 중심
- **NoSQL, 메시징 시스템, 캐시 서버** 등에서 주로 사용

---


### 비교 요약


| 항목     | Strong Consistency | Eventual Consistency       |
| ------ | ------------------ | -------------------------- |
| 일관성 수준 | 항상 최신 보장           | 결국 최신 상태 수렴                |
| 읽기 시점  | 최신 값               | 이전 값일 수 있음                 |
| 성능     | 낮음 (지연 가능성)        | 높음 (지연 최소)                 |
| 사용 환경  | 금융, 주문 처리 등        | SNS 피드, 캐시 등               |
| 예시     | Oracle, PostgreSQL | Cassandra, Redis (AOF), S3 |


---


### 핵심 키워드

> 정합성 / Strong Consistency / Eventual Consistency / 트랜잭션 / BASE 모델 / 일관성 모델 / 분산 시스템 / 지연 허용
