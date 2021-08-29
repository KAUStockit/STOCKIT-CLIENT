import React from "react";
import styled from "@emotion/styled";

interface ToolTipProp {
	content: string;
}

const ToolTip: React.FC<ToolTipProp> = ({ content }) => {
	return <Container id="tooltip">{content}</Container>;
};

// position: 마우스 따라가도록 처리해야함
const Container = styled.span`
	padding: 3px 10px;
	height: auto;
	border: none;
	border-radius: 20px;
	background: rgba(0, 0, 0, 0.3);
	display: none;
	position: fixed;
	font-size: 14px;
	z-index: 999;
`;

export default ToolTip;
