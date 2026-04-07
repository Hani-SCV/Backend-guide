---
title: "웹소켓(WebSocket)"
sidebar_position: 1
slug: "/웹소켓/웹소켓websocket"
---


---


### 🔍 개념

- 웹소켓(WebSocket): 클라이언트 ↔ 서버 간 **양방향(full-duplex) 통신** 프로토콜
- HTTP 한계: 요청 → 응답 구조만 가능 → 실시간 데이터 처리 어렵다
- 웹소켓 특징: TCP 기반, 연결 후 **지속적 데이터 송수신**, 서버 푸시 가능, 오버헤드 적음

---


### ⚙️ 동작 흐름

1. 클라이언트 → 서버: 웹소켓 연결 요청 (`Upgrade: websocket`)
2. 서버: 요청 승인 → 연결 수립
3. 연결 유지: 클라이언트/서버 양방향 데이터 송수신 가능
4. 종료: 클라이언트/서버 어느 쪽이든 연결 종료 가능

---


### 🔑 프로토콜

- `ws://` → 비암호화 연결
- `wss://` → TLS 암호화 연결 (HTTPS와 동일 수준 보안)

---


### 💬 메시지 타입

- **텍스트(Text)**: UTF-8 문자열
- **바이너리(Binary)**: ArrayBuffer, Blob
- **제어(Control)**: Ping, Pong, Close (연결 관리용)

---


### ✅ 장점

- 실시간 데이터 처리 가능 (채팅, 알림, 게임, 주식 등)
- 낮은 지연(latency)
- 서버 → 클라이언트 **푸시 가능**

---


### ⚠️ 단점

- 연결 유지 → 서버 리소스 점유
- 방화벽/프록시에서 차단 가능
- 브라우저 외 환경 → 라이브러리 필요

---


### 🛠 백엔드 구현 예시


### Java / Spring


```java
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(new MyHandler(), "/ws")
                .setAllowedOrigins("*");
    }
}

@Component
public class MyHandler extends TextWebSocketHandler {
    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        session.sendMessage(new TextMessage("Echo: " + message.getPayload()));
    }
}
```


### Node.js


```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', message => {
    ws.send(`Echo: ${message}`);
  });
});
```


---


### 💡 활용 사례

- 채팅 서비스 💬
- 실시간 알림 🔔
- 멀티플레이 게임 🎮
- 실시간 금융/주식 데이터 📈
- IoT 기기 통신 📡
