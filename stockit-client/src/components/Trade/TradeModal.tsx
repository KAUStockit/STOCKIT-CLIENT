// 사기 / 팔기 버튼을 눌렀을때 뜨는 모달창 컴포넌트

import React from "react";
import styled from "@emotion/styled";

// interface
type TradeModalProp = {
	type: string;
	hide: any;
};

const TradeModal: React.FC<TradeModalProp> = ({ type, hide }) => {
	const onClose = () => {
		hide(false);
	};

	return (
		<Modal>
			{type}
			<button onClick={onClose}>취소</button>
		</Modal>
	);
};

//* css : @emotion/styled
const Modal = styled.div`
	background-color: rgba(0, 0, 0, 50%);
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
`;

export default TradeModal;
