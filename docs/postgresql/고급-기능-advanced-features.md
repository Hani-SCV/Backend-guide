---
title: "고급 기능 (Advanced Features)"
sidebar_position: 8
slug: "/postgresql/고급-기능-advanced-features"
---


### **뷰 (View)**

- **뷰**는 데이터베이스에서 자주 사용하는 쿼리를 저장해 두고, 테이블처럼 사용할 수 있는 가상 테이블.
- 뷰는 실제 데이터를 저장하지 않고, 실행 시점에 쿼리 결과를 반환.

### **뷰 생성**


```sql
CREATE VIEW view_name AS
SELECT column1, column2
FROM table_name
WHERE condition;
```


### **뷰 사용**

- 뷰는 테이블처럼 SELECT 쿼리에서 사용할 수 있음.

```sql
SELECT * FROM view_name;
```


---


### **물리적 설계 (Partitioning)**

- **파티셔닝**은 큰 테이블을 작은 논리적 단위로 분할하여 관리할 수 있도록 하는 기능.
- 데이터의 처리 성능을 향상시키고 관리가 용이해짐.

### **파티셔닝 유형**

1. **Range Partitioning**: 값의 범위에 따라 데이터를 나눔.
2. **List Partitioning**: 값의 목록에 따라 데이터를 나눔.
3. **Hash Partitioning**: 해시 값을 기준으로 데이터를 나눔.

### **예시**:


```sql
CREATE TABLE orders (
  order_id SERIAL,
  order_date DATE,
  customer_id INT
) PARTITION BY RANGE (order_date);

CREATE TABLE orders_2020 PARTITION OF orders FOR VALUES FROM ('2020-01-01') TO ('2020-12-31');
CREATE TABLE orders_2021 PARTITION OF orders FOR VALUES FROM ('2021-01-01') TO ('2021-12-31');
```


---


### **커스텀 데이터 타입 (Custom Data Types)**

- **커스텀 데이터 타입**은 PostgreSQL에서 제공하는 기본 데이터 타입 외에 사용자가 정의한 데이터 타입.
- `CREATE TYPE`을 사용하여 새로운 데이터 타입을 정의 가능.

### **예시**:


```sql
CREATE TYPE color AS ENUM ('red', 'green', 'blue');
```


---


### **외부 데이터 (Foreign Data Wrappers)**

- *외부 데이터 래퍼 (FDW)**는 PostgreSQL 외부의 데이터 소스를 연결할 수 있게 해주는 기능.
- 다른 데이터베이스나 파일 시스템에서 데이터를 읽거나 쓸 수 있음.

### **예시**:


```sql
CREATE EXTENSION postgres_fdw;

-- 외부 서버 연결 설정
CREATE SERVER foreign_server
  FOREIGN DATA WRAPPER postgres_fdw
  OPTIONS (host 'foreign_host', dbname 'foreign_db');

-- 외부 테이블 생성
CREATE FOREIGN TABLE foreign_table (
  id INT,
  name TEXT
) SERVER foreign_server
  OPTIONS (schema_name 'public', table_name 'remote_table');
```


---


### **집계 함수 (Aggregate Functions)**

- **집계 함수**는 데이터를 그룹화하여 요약 정보를 계산하는 함수.
- 예시: `SUM`, `AVG`, `MAX`, `MIN`, `COUNT` 등.

### **예시**:


```sql
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id;
```


### **사용자 정의 집계 함수**

- PostgreSQL에서는 **사용자 정의 집계 함수**도 생성할 수 있음.

```sql
CREATE AGGREGATE array_agg_custom (ANYELEMENT)
(
  sfunc = array_append,
  stype = anyarray
);
```


---


### **시간 여행 (Temporal Tables)**

- **시스템 버전 관리 테이블**을 사용하여 데이터를 시간에 따라 추적할 수 있음.
- **시점 조회**를 통해 특정 시점의 데이터 상태를 조회 가능.

### **시스템 버전 관리 테이블 설정**


```sql
CREATE TABLE my_table (
  id SERIAL PRIMARY KEY,
  data TEXT,
  valid_from TIMESTAMP WITHOUT TIME ZONE,
  valid_to TIMESTAMP WITHOUT TIME ZONE
);
```


---


### **비동기 처리 (Asynchronous Processing)**

- **LISTEN**과 **NOTIFY** 명령어를 사용하여 비동기적으로 이벤트를 처리.
- PostgreSQL은 이벤트 기반 처리와 실시간 알림 시스템을 제공.

### **예시**:


```sql
-- 이벤트 대기
LISTEN my_event;

-- 이벤트 발생
NOTIFY my_event;
```


---


### **확장 (Extensions)**

- **확장**은 PostgreSQL의 기능을 확장하는 방법으로, 추가적인 기능을 쉽게 추가할 수 있음.
- PostgreSQL은 수많은 유용한 확장 모듈을 제공.

### **확장 설치 예시**:


```sql
-- 확장 설치
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- 확장 사용
SELECT * FROM pg_trgm.show_trgm('hello');
```


---


### **트랜잭션 관리 고급 기능**

- **SAVEPOINT**: 트랜잭션 내에서 부분적으로 롤백을 수행할 수 있게 해주는 기능.
- **예시**:

    ```sql
    BEGIN;
    SAVEPOINT savepoint_name;
    -- 작업 수행
    ROLLBACK TO SAVEPOINT savepoint_name;
    COMMIT;
    ```


---


### **비밀번호 해싱 (Password Hashing)**

- PostgreSQL에서 비밀번호를 안전하게 저장하려면 **암호화된 비밀번호 해싱**을 사용.
- **pgcrypto** 확장을 사용하여 비밀번호를 해시할 수 있음.

### **예시**:


```sql
SELECT crypt('password', gen_salt('bf'));
```

