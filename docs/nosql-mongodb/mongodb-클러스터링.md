---
title: "MongoDB 클러스터링"
sidebar_position: 8
slug: "/nosql-mongodb/mongodb-클러스터링"
---


> 💡 MongoDB는 고가용성(High Availability)과 확장성(Scalability)을 제공하기 위해 **Replica Set**과 **Sharding** 두 가지 클러스터링 방법을 지원합니다. 이 챕터에서는 MongoDB 클러스터링을 설정하는 방법과 각 기능의 특징을 다룹니다.


---


### **Replica Set**


Replica Set은 **MongoDB**의 고가용성 기능을 제공하며, 여러 서버(Primary와 Secondary) 간에 데이터를 복제하여 하나의 장애가 발생하더라도 데이터베이스 서비스가 중단되지 않도록 보장합니다.


### **Replica Set 구성**

- Replica Set은 **Primary**와 **Secondary** 복제본으로 구성되며, 하나의 Primary 노드는 쓰기 작업을 처리하고, Secondary 노드들은 Primary의 데이터를 복제합니다.

**예시: Replica Set 초기화**


```shell
rs.initiate()
```

- Replica Set을 초기화하고, 노드들이 데이터를 복제할 수 있도록 설정합니다.

### **Primary 노드 및 Secondary 노드**

- **Primary 노드**: 쓰기 작업을 처리하는 주요 노드
- **Secondary 노드**: Primary 노드의 데이터를 복제하고, 읽기 작업을 처리할 수 있음

### **Replica Set 상태 확인**

- Replica Set 상태를 확인하려면 `rs.status()` 명령어를 사용합니다.

```shell
rs.status()
```


---


### **Sharding**


Sharding은 대규모 데이터베이스에서 데이터를 여러 서버에 분산하여 저장하는 방법입니다. 데이터를 여러 파티션으로 나누어 저장하고, 쿼리 성능을 최적화할 수 있습니다. **Sharding**은 MongoDB의 수평 확장성(horizontal scaling)을 가능하게 합니다.


### **Sharding 설정**

- Sharding을 설정하려면 **Shard Key**를 선택하고, MongoDB 클러스터에 여러 **Shard**를 배치합니다.

**예시: Sharding 클러스터 설정**


```shell
sh.enableSharding("myDatabase")
sh.shardCollection("myDatabase.myCollection", { "shardKey": 1 })
```

- `sh.enableSharding`을 통해 데이터베이스에서 Sharding을 활성화하고, `sh.shardCollection` 명령어로 컬렉션에 Shard Key를 설정하여 데이터를 분산합니다.

### **Shard Key**

- **Shard Key**는 데이터를 분산하는 기준이 되는 필드입니다. Shard Key는 데이터를 균등하게 분배할 수 있도록 잘 선택해야 합니다.

---


### **Sharding과 Replica Set 결합**


MongoDB에서는 **Replica Set**과 **Sharding**을 결합하여 사용 가능합니다. 이렇게 하면 고가용성은 물론, 수평 확장을 통한 성능 향상도 동시에 얻을 수 있습니다.


### **Shard 서버의 Replica Set 구성**

- 각 Shard 서버는 Replica Set으로 구성하여 데이터의 고가용성 및 안정성을 높입니다.

---


### **MongoDB 클러스터링의 장점**

- **고가용성**: Primary 노드에 장애가 발생하면 자동으로 다른 노드가 Primary 역할을 맡아 서비스 중단 없이 운영 가능합니다.
- **확장성**: 데이터를 여러 서버에 분산하여 저장하고, 시스템의 부하가 커지면 추가 서버를 쉽게 연결하여 확장이 가능합니다.
- **성능 최적화**: Sharding을 통해 대용량 데이터베이스의 성능을 향상시킬 수 있습니다.
