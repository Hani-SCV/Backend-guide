---
title: "웹 서버(Web Server)"
sidebar_position: 1
slug: "/웹-서버/웹-서버web-server"
---


---


### 🔍 개념

- 웹 서버(Web Server): 클라이언트 요청(HTTP) → 응답(HTML, JSON 등) 처리하는 서버
- 역할: 정적 파일 제공, 동적 요청 처리, API 응답, 로드 밸런싱 등
- HTTP 기반 통신: 클라이언트 ↔ 서버 간 **요청(Request) / 응답(Response)** 구조

---


### ⚙️ 동작 흐름

1. 클라이언트 → 서버: HTTP 요청 (예: GET /index.html)
2. 서버: 요청 파싱 → 적절한 처리
3. 서버 → 클라이언트: HTTP 응답 (HTML, JSON, 상태 코드 등)
4. 연결 종료 또는 Keep-Alive로 지속 연결 유지

---


### 🔑 주요 구성 요소

- **요청(Request)** 📨: 메서드(GET, POST 등), 헤더, URL, Body
- **응답(Response)** 📤: 상태 코드(200, 404 등), 헤더, Body
- **서버 소프트웨어** ⚙️: Nginx, Apache, Caddy 등
- **애플리케이션 서버** 🛠: Java(Spring), Node.js(Express), Python(Django/Flask)

---


### ✅ 장점

- 클라이언트 요청 처리 표준화
- 정적/동적 컨텐츠 제공 가능
- 로드 밸런싱, 캐싱, 보안 설정 등 인프라 구성 가능

---


### ⚠️ 단점 / 주의점

- 트래픽 많으면 리소스 부담
- 보안 취약점 관리 필요 (XSS, CSRF, SQL Injection 등)
- 연결 지속 시 서버 리소스 점유

---


### 🛠 기본 설정 예시


### Nginx (정적 파일 제공)


```plain text
server {
    listen 80;
    server_name example.com;

    location / {
        root /var/www/html;
        index index.html index.htm;
    }
}
```


### Node.js (Express)


```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```


---


### 💡 활용 사례

- 정적 웹사이트 제공 🌐
- REST API 서버 🔗
- 리버스 프록시 / 로드 밸런서 ⚖️
- 실시간 애플리케이션(WebSocket, SSE 등) 🕒
