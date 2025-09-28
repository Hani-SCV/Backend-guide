---
sidebar_position: 3
---

# Transaction

## 트랜잭션 개념

> **하나의 논리적 작업 단위**  
> 여러 DB 연산을 묶어 **모두 성공 or 전부 실패 (Rollback)**  
> 트랜잭션은 **ACID 원칙**을 만족해야 함  
> 실행 흐름: BEGIN → 작업 수행 → COMMIT 또는 ROLLBACK

---

### ⚖️ 격리 수준(Isolation Level)

- 동시 트랜잭션 간 간섭 방지 설정
- 격리 수준 ↑ → 일관성 ↑, 성능 ↓

---

### 🧱 ANSI SQL 표준 격리 수준

| 수준 | 허용되는 현상 | 설명 |
| --- | --- | --- |
| Read Uncommitted | Dirty Read | 커밋 안 된 데이터 읽기 (가장 낮은 격리) |
| Read Committed | Non-Repeatable Read 발생 가능 | 커밋된 데이터만 읽음 (Oracle 기본값) |
| Repeatable Read | Phantom Read 발생 가능 | 같은 쿼리 결과 반복 보장 (MySQL 기본값) |
| Serializable | 없음 | 완전 격리, 동시성 크게 저하 |

---

### 🧨 이상 현상 정리

| 현상 | 설명 |
| --- | --- |
| Dirty Read | 다른 트랜잭션의 미커밋 데이터를 읽음 |
| Non-Repeatable Read | 같은 쿼리를 반복했는데 결과가 다름 |
| Phantom Read | 조건은 같지만 조회되는 행 개수 변화 |

---

### ⚙️ 격리 수준별 특징 및 사용 팁

| 수준 | 특징 | 사용 시점 |
| --- | --- | --- |
| Read Uncommitted | 성능 최우선 / 정확도 낮음 | 캐시성 데이터 등 |
| Read Committed | Dirty Read 방지 / 대부분 DB 기본값 | 일반적인 업무 시스템 |
| Repeatable Read | 데이터 일관성 ↑ / 팬텀 리드 발생 가능 | MySQL 트랜잭션 기본값 |
| Serializable | 완전한 일관성 보장 / 성능 저하 큼 | 금융·회계 등 정합성 최우선 |

---

### 🧠 핵심 키워드

> 트랜잭션 / COMMIT / ROLLBACK / 격리 수준 / 동시성 / 팬텀 리드 / 더티 리드 / 일관성 / 성능 트레이드오프