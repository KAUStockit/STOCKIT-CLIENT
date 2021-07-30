import React from "react";
import styled from "@emotion/styled";

interface ToolTipProp {
	content: string;
}

const ToolTip: React.FC<ToolTipProp> = (content) => {
	return <Container>{content}</Container>;
};

// position: 마우스 따라가도록 처리해야함
const Container = styled.div`
	width: 200px;
	height: auto;
	border: none;
	border-radius: 20px;
	background: rgba(0, 0, 0, 0.3);
`;

export default ToolTip;
