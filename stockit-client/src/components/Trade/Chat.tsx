import React, { useState, useEffect } from "react";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { ChatComponent, Title, ChatContent, ChatInput } from "./ChatStyle";
import { getCookie } from "../../utils/Cookie";

// components
import ChatMessage from "./ChatMessage";

// interface
import { ChatMessageObject } from "../../interfaces/TradeInterface";

// socket endpoint
const SOCKET_ENDPOINT = 'http://localhost:8080';
const socket = new SockJS(SOCKET_ENDPOINT);
let stompClient : Stomp.Client = Stomp.over(socket);
stompClient.debug = () => {};

function Chat() {
	const [currentUser, setCurrentUser] = useState(1); // 채팅방 현재 유저수
	const [messages, setMessages] = useState<ChatMessageObject[]>([]); // 채팅 내용
	const [currentMessage, setCurrentMessage] = useState<string>(""); // 내가 입력하는 채팅 내용
	const user = getCookie('user');

	useEffect(() => {
		stompClient.connect({}, () => {
			stompClient.subscribe('/send', console.log);
			console.log({'user' : user?.nickname ?? "닉네임", 'message' : 'hihi'})
		})
		// const now = new Date();
		// socket.on("message", () => {
		// 	setMessages(messages => [...messages, { from: '', text: '', timestamp: now}]);
		// });
	}, []);

	const onInputChange = (e: any) => {
		setCurrentMessage(e.currentTarget.value);
	};

	const onSendClick = (e: any) => {
		// 채팅 내용을 서버로 보내는 코드
		console.log({'user' : user?.nickname ?? "닉네임", 'message' : 'hihi'})
		stompClient.send('/receive', JSON.stringify({'user' : user?.nickname ?? "닉네임", 'message' : 'hihi'}));
		setCurrentMessage('');
	};

	

	return (
		<ChatComponent>
			<Title>
				<p>실시간 톡</p>
				<p>참여인원 : {currentUser}명</p>
			</Title>
			<ChatContent>
				{messages.map((message, idx) => (
					<ChatMessage key={idx} from={message.from} text={message.text} timestamp={message.timestamp} />
				))}
			</ChatContent>
			<ChatInput>
				<input type="text" placeholder="내용을 입력해주세요." onChange={onInputChange} />
				<button onClick={onSendClick}>전송</button>
			</ChatInput>
		</ChatComponent>
	);
}

export default Chat;
