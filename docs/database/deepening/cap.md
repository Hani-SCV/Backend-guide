---
sidebar_position: 14
---

# CAP 이론

## 🔍 CAP 이론이란?

- 분산 시스템은 세 가지 특성 중 **두 가지만** 온전히 만족 가능
    1. 일관성 (C)
    2. 가용성 (A)
    3. 파티션 내구성 (P)

### ⚙️ 세 가지 특성

- 🧷 일관성 (Consistency)
    
    모든 노드가 동일한 최신 데이터 상태 유지
    
- ⚡ 가용성 (Availability)
    
    모든 요청에 대해 항상 응답 보장
    
- 🔗 파티션 내구성 (Partition Tolerance)
    
    네트워크 분할(장애) 발생 시에도 시스템 작동 유지

### ⚡ 조합 유형

| 유형 | 만족 특성 | 특징 |
| --- | --- | --- |
| CP | 일관성+파티션 | 네트워크 분할 시 일관성 유지, 가용성 저하 |
| AP | 가용성+파티션 | 분할 시 빠른 응답, 일시적 불일치 허용 |
| CA | 일관성+가용성 | 분할 상황에서 작동 불가(단일 노드 수준) |

### 🧩 대표 시스템 예시

- CP: Zookeeper, HBase
- AP: Cassandra, Couchbase, DynamoDB
- CA: 단일 노드 RDBMS(분산 없음)

### ⚠️ 현실 적용과 한계

- 100% CP 또는 AP 시스템은 존재하지 않음
- 대부분 P를 기본으로 하며 C 와 A 간 **타협**
- **Eventual Consistency**(최종적 일관성) 모델로 일관성 지연 수용

### 🔍 확장 개념: PACELC

- 분할(Partition) 외에도 **지연(Latency) vs 일관성(Consistency)** 간 트레이드오프
- P (분할) 시 A vs C, Else(정상 상태) L vs C 결정
