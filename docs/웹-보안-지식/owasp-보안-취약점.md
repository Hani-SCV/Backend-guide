---
title: "OWASP 보안 취약점"
sidebar_position: 7
slug: "/웹-보안-지식/owasp-보안-취약점"
---


---


### 개념


> - OWASP(Open Web Application Security Project)에서 선정한 **웹 애플리케이션 상위 10가지 보안 위협**  
>   
> - 각 취약점의 발생 원인과 대응 방안을 통해 안전한 서비스 설계·구현 유도


### OWASP Top 10

1. **A01: Broken Access Control**

    권한 검증 로직 미흡으로, 인증된 사용자도 허용되지 않은 기능·데이터 접근

2. **A02: Cryptographic Failures**

    평문 저장·전송, 약한 암호화 알고리즘 사용 등으로 인한 기밀성 파괴

3. **A03: Injection**

    SQL·OS·LDAP 등 외부 입력을 필터링 없이 처리하여 코드·명령어 주입

4. **A04: Insecure Design**

    보안 설계 부족으로 발생하는 로직·흐름상의 근본적 취약점

5. **A05: Security Misconfiguration**

    디폴트 설정, 불필요한 기능 활성화, 구버전 소프트웨어 사용 등으로 인한 공격 노출

6. **A06: Vulnerable and Outdated Components**

    취약점이 있는 라이브러리·플러그인·프레임워크 사용

7. **A07: Identification and Authentication Failures**

    로그인·세션 관리 취약으로 인한 계정 탈취·세션 하이재킹

8. **A08: Software and Data Integrity Failures**

    CI/CD 파이프라인, 업데이트 파일 위변조 등 무결성 검증 미흡

9. **A09: Security Logging and Monitoring Failures**

    침해 사고 탐지·대응을 위한 로깅·모니터링 체계 부재

10. **A10: Server-Side Request Forgery (SSRF)**

    서버가 임의 외부 URL에 요청을 보내 내부 네트워크까지 노출


### 대응 전략

- **입력값 검증 & 출력 인코딩**: 화이트리스트 방식 우선 적용
- **최소 권한 원칙**: 역할별 접근 권한 철저히 분리
- **정기적 업데이트**: 라이브러리·프레임워크 최신화
- **보안 설정 점검**: 자동화 도구(SAST, DAST) 활용
- **로깅·모니터링**: 의심스러운 활동 실시간 경고 체계 구축

### 팁

- CI/CD 과정에 **취약점 스캔** 통합 (예: OWASP Dependency-Check, Snyk)
- **펜테스트** 주기적 수행으로 설계·설정 오류 조기 발견
- 가이드라인 문서(OWASP Cheat Sheet) 활용해 취약점별 대응 코드 패턴 확보
