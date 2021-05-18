// 사기 / 팔기 버튼을 눌렀을때 뜨는 모달창 컴포넌트

import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

// interface
type TradeModalProp = {
	type: string;
	hide: any;
	price: number;
	isAdvanced: boolean;
};

const TradeModal: React.FC<TradeModalProp> = ({
	type,
	hide,
	price,
	isAdvanced,
}) => {
	const onClose = () => {
		hide(false);
	};

	const buyOrSell = () => (type === "buy" ? "사기" : "팔기");

	return (
		<Modal>
			<ModalFrame>
				<p>{buyOrSell()}</p>
				<p>{price}원</p>
				<div>
					<button onClick={onClose}>취소</button>
					<button>{buyOrSell()}</button>
				</div>
			</ModalFrame>
		</Modal>
	);
};

//* css : @emotion/styled
const Modal = styled.div`
	background-color: rgba(0, 0, 0, 50%);
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
`;

const ModalFrame = styled.div`
	background-color: white;
	position: absolute;
	width: 450px;
	height: 500px;
	box-shadow: 3px 1px 3px 3px #7c7c7c;
	border-radius: 5px;
`;

export default TradeModal;
