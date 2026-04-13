---
title: "CI/CD 개요"
sidebar_position: 1
slug: "/cicd/cicd-개요"
---


---


## 개념


> - **CI (Continuous Integration)**  
>   
> - **CD (Continuous Delivery / Continuous Deployment)**


### 기본 흐름

1. **코드 푸시 (예: GitHub, GitLab)**
2. CI 서버가 자동으로 테스트 & 빌드 수행
3. 성공 시 아티팩트(산출물) 생성
4. (CD) 자동 배포 또는 배포 승인 대기
5. 최종 배포 (웹서버, 클라우드, K8s 등)

### 장점

- 코드 품질 향상 (테스트 자동화)
- 빠른 피드백 루프 (PR → CI → 오류 확인)
- 배포 속도 & 안정성 개선
- 협업 생산성 향상

### 고려 사항

- 테스트 자동화가 선행되어야 함
- 배포 자동화 시 롤백 전략 마련 필요
- 보안 인증/비밀값 관리 주의 (.env, secrets)

### 기타 용어 정리


| 용어       | 설명                                    |
| -------- | ------------------------------------- |
| Build    | 소스 코드 → 실행 가능한 형태로 변환 (예: JAR, WAR)   |
| Test     | 단위, 통합, 기능 테스트 자동 수행                  |
| Pipeline | 일련의 자동화 단계 집합 (build → test → deploy) |
| Runner   | 실제 빌드/테스트 작업을 수행하는 서버 또는 환경           |

