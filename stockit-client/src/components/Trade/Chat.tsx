import React, { useState } from "react";

// components
import ChatMessage from "./ChatMessage";

// interface
export type ChatMessageObject = {
	// 주고받는 메시지의 타입
	from: string; // 보낸사람이 내 아이디랑 같으면 오른쪽정렬, 아니면 왼쪽정렬
	text: string;
	timestamp: Date;
};

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
		<div>
			<div className="chat__header">
				<p>실시간 톡</p>
				<p>참여인원 : {currentUser}명</p>
			</div>
			<div className="chat__content">
				{messages.map((message) => (
					<ChatMessage
						from={message.from}
						text={message.text}
						timestamp={message.timestamp}
					/>
				))}
			</div>
			<div className="chat__input">
				<input
					type="text"
					placeholder="내용을 입력해주세요."
					onChange={onInputChange}
				/>
				<div onClick={onSendClick}>전송</div>
			</div>
		</div>
	);
}

export default Chat;
