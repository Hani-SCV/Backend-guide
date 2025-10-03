---
sidebar_position: 1
---

# ORM

### Object-Relational Mapping 개념

> 객체지향 언어의 **클래스 ↔ 관계형 DB 테이블** 매핑 기술 → 객체 기반 코드로 DB 조작 가능하도록 하는 **추상화 계층**

### 🎯 목적

- SQL 없이 객체 조작으로 DB 접근
- 개발 생산성 향상
- 코드 재사용성, 유지보수성 증가
- DB 독립성 확보 (교체 유연)

### ⚙️ 대표 ORM 프레임워크

| 언어 | ORM |
| --- | --- |
| Java | Hibernate, JPA, Spring Data JPA |
| Python | SQLAlchemy, Django ORM |
| JS/TS | Sequelize, TypeORM, Prisma |

### ✅ 장점

- 객체지향(OOP) 설계 유지
- DB 의존성 낮아져 유연한 아키텍처 가능
- 트랜잭션/연결 등 자동 처리
- 도메인 모델 기반 개발 용이

### ⚠️ 단점

- 복잡한 SQL(JOIN, GROUP BY 등) 비효율
- **N+1 문제**, **지연 vs 즉시 로딩 이슈**
- 내부 동작 이해 부족 시 성능 저하 발생
- 추상화 → 디버깅 어려움

### 🧠 핵심 키워드

- 객체-관계 매핑
- 추상화 계층
- 생산성 / 유지보수성
- DB 독립성
- Lazy Loading / Eager Loading
- N+1 문제
- 영속성 컨텍스트 (Persistence Context)

### 🔗 주요 매핑 관계 (기본만 정리)

| 관계 | 예시 | 설명 |
| --- | --- | --- |
| `@OneToMany` / `@ManyToOne` | 게시글 - 댓글 | 1:N |
| `@ManyToMany` | 사용자 - 권한 | N:M |
| `@OneToOne` | 사용자 - 프로필 | 1:1 |

🛠️ 관계 설정 시 주요 키워드:

- `mappedBy`
- `fetch = FetchType.LAZY`
- `cascade = CascadeType.ALL`

### 📊 클래스 ↔ 테이블 매핑 예시

```
[ 클래스(User) ]
┌──────────────┐
│ id           │
│ name         │
│ email        │
└──────────────┘
        ↓ ORM 매핑
[ DB 테이블(user) ]
┌──────────────┐
│ id           │   < PK
│ name         │   < VARCHAR
│ email        │   < VARCHAR
└──────────────┘
```