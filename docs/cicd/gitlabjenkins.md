---
title: "GitLab/Jenkins"
sidebar_position: 2
slug: "/cicd/gitlabjenkins"
---


---


### GitLab CI/CD

- **GitLab 자체에 내장된 CI/CD 기능**
- `.gitlab-ci.yml` 파일로 **파이프라인 정의**
- Git Push만으로 빌드/테스트/배포 자동화 가능

### 주요 구성

- **Runner**: 실제 작업 수행 서버 (Docker or Shell)
- **Stages**: build, test, deploy 등의 단계
- **Jobs**: 각 stage 내에서 실행될 작업
- **Artifacts**: 빌드 결과물 공유 가능
- **Environment/Variable**: 배포 환경 구분 및 보안 변수 설정

### Jenkins

- **오픈소스 자동화 서버**
- 플러그인을 통해 CI/CD 구축 가능 (자유도 높음)
- **Jenkinsfile**로 파이프라인 코드화 가능 (선택 사항)

### 특징

- 다양한 플러그인 (Slack 연동, Docker 빌드 등)
- Git, GitHub, GitLab 등과 연동 가능
- 서버 직접 구축 or Docker로 운영 가능

### GitLab vs Jenkins 비교


| 항목     | GitLab CI/CD     | Jenkins            |
| ------ | ---------------- | ------------------ |
| 설치     | GitLab에 내장       | 별도 설치 필요           |
| 설정 방식  | `.gitlab-ci.yml` | Jenkinsfile 또는 GUI |
| 러너     | GitLab Runner    | Jenkins Agent      |
| 플러그인   | 제한적              | 풍부함                |
| 유지보수   | 간편               | 복잡할 수 있음           |
| 커스터마이징 | 제한적              | 매우 유연함             |

