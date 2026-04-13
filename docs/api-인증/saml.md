---
title: "SAML"
sidebar_position: 7
slug: "/api-인증/saml"
---


---


### 개념


> - SAML(Security Assertion Markup Language) 은 XML 기반 인증·인가 표준  
>   
> - 목표: 웹 브라우저 환경에서 싱글 사인온(SSO) 제공


### 동작 흐름 (Web Browser SSO)

1. 사용자 → SP(Service Provider): 보호된 리소스 요청
2. SP → 사용자 리다이렉트: SAML 요청(AuthnRequest)
3. 사용자 → IdP(Identity Provider): AuthnRequest 전달 (HTTP Redirect or POST)
4. IdP: 사용자 인증 후 SAML 어서션 생성
5. IdP → 사용자: SAML 어서션 전달 (HTTP POST binding)
6. 사용자 → SP: 어서션 포함 폼 자동 제출
7. SP: 어서션 서명·유효기간·조건검사 후 사용자에게 서비스 제공

### 주요 요소

- EntityID: IdP·SP 고유 식별자
- Metadata: endpoint URL, certificate 정보 등 상호 신뢰 설정
- AuthnRequest: SP 가 IdP 에 보내는 인증 요청 XML
- Assertion: 인증 결과·속성(Attribute) 담긴 XML 문서
- Binding: XML 메시지 전송 방식
    - HTTP Redirect
    - HTTP POST
    - HTTP Artifact

### 보안 고려사항

- assertion 과 메시지에 반드시 서명(Signature)
- HTTPS 사용으로 전송 암호화
- clock skew 처리(어설션 유효기간)
- replay 공격 방지: AssertionConsumerService URL, InResponseTo, OneTimeUse 조건 검증
- certificate 교체 대비 JWKS 또는 메타데이터 주기적 갱신
