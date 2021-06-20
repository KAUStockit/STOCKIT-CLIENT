import React from "react";

// interface
import { ChatMessageObject } from "../../interfaces/TradeInterface";

const ChatMessage: React.FC<ChatMessageObject> = ({
	from,
	text,
	timestamp,
}) => {
	return (
		<div>
			<span>{from}</span>
			<div>{text}</div>
		</div>
	);
};

export default ChatMessage;
