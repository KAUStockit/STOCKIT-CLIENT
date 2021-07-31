import React, { useState } from "react";
import { ChatComponent, Title, ChatContent, ChatInput } from "./ChatStyle";

// components
import ChatMessage from "./ChatMessage";

// interface
import { ChatMessageObject } from "../../interfaces/TradeInterface";

function Chat() {
	const [currentUser, setCurrentUser] = useState(1); // 채팅방 현재 유저수
	const [messages, setMessages] = useState<ChatMessageObject[]>([]); // 채팅 내용
	const [currentMessage, setCurrentMessage] = useState<string>(""); // 내가 입력하는 채팅 내용

	const onInputChange = (e: any) => {
		setCurrentMessage(e.currentTarget.value);
	};

	const onSendClick = (e: any) => {
		// 채팅 내용을 서버로 보내는 코드
		console.log(currentMessage);
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
