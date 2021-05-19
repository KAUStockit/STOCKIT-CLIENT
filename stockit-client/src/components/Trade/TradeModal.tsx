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
					<p>주문수량</p>
					<input type="range" min="1" max="100" />
					<input type="text" placeholder="1주" />
				</div>
				<div>
					<p>총주문금액</p>
					<p>0원</p>
				</div>
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
	display: flex;
	flex-direction: column;
	align-items: center;

	& > p:nth-of-type(1) {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		font-weight: 600;
		width: 90%;
		padding-top: 10px;
		padding-bottom: 20px;
		border-bottom: 1px solid ${COLOR.BOX_BORDER};
	}

	& > p:nth-of-type(2) {
		padding: 3% 0 3% 0;
		color: ${COLOR.BLUE};
		font-size: 30px;
	}

	& > div:nth-of-type(1) {
		width: 70%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2vh;
	}

	& > div:nth-of-type(1) > input:nth-of-type(2) {
		width: 40px;
		height: 30px;
	}

	& > div:nth-of-type(2) {
		width: 70%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 5vh;
	}

	& > div:nth-of-type(3) {
		width: 70%;
		display: flex;
		justify-content: space-around;

		& > button {
			width: 45%;
			height: 50px;
			outline: none;
			border: none;
			border-radius: 5px;
			color: white;
			font-weight: 500;
		}

		& > button:nth-of-type(1) {
			background-color: ${COLOR.BUTTON_INACTIVE};
		}

		& > button:nth-of-type(2) {
			background-color: ${COLOR.BLUE};
		}
	}
`;

export default TradeModal;
