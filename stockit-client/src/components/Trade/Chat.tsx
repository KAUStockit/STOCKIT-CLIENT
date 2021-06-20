import React, { useState } from "react";
import styled from "@emotion/styled";

// components
import ChatMessage from "./ChatMessage";
import { COLOR } from "../../constants/theme";

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
					<ChatMessage
						key={idx}
						from={message.from}
						text={message.text}
						timestamp={message.timestamp}
					/>
				))}
			</ChatContent>
			<ChatInput>
				<input
					type="text"
					placeholder="내용을 입력해주세요."
					onChange={onInputChange}
				/>
				<button onClick={onSendClick}>전송</button>
			</ChatInput>
		</ChatComponent>
	);
}

const ChatComponent = styled.div`
	box-shadow: 1px 1px 2px 2px #e2e2e2;
`;

const Title = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #e2e2e2;
	height: 40px;
	font-size: 14px;

	& > p:nth-of-type(1) {
		margin-left: 20px;
	}

	& > p:nth-of-type(2) {
		margin-right: 20px;
	}
`;

const ChatContent = styled.div`
	min-height: 100px;
`;

const ChatInput = styled.div`
	height: 60px;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 10px;

	& > input {
		width: 65%;
		height: 40px;
		border: 1px solid #e2e2e2;
		border-radius: 5px;
		margin-left: 15px;
	}

	& > button {
		width: 20%;
		height: 40px;
		background-color: ${COLOR.BLUE};
		border: none;
		color: white;
		margin-right: 15px;

		border-radius: 5px;
	}
`;

export default Chat;
