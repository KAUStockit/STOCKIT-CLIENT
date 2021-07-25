// 사기 / 팔기 버튼을 눌렀을때 뜨는 모달창 컴포넌트

import React, { useState } from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";
import { Range } from "react-range";

// interface
import { TradeModalProp } from "../../interfaces/TradeInterface";

const TradeModal: React.FC<TradeModalProp> = ({ type, hide, price, name }) => {
	const [isDone, setIsDone] = useState(false);
	const [quantity, setQuantity] = useState([50]);

	const onClose = () => {
		hide(false);
	};

	const buyOrSell = () => (type === "buy" ? "사기" : "팔기");

	const onDoneClick = () => {
		setIsDone(true);
	};

	const configureDoneUI = () => {
		console.log(buyOrSell);
		return (
			<DoneModalFrame>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="62"
					height="62"
					viewBox="0 0 62 62"
				>
					<g
						id="그룹_139"
						data-name="그룹 139"
						transform="translate(-926 -406)"
					>
						<circle
							id="타원_59"
							data-name="타원 59"
							cx="31"
							cy="31"
							r="31"
							transform="translate(926 406)"
							fill="#3472ff"
						/>
						<path
							id="패스_153"
							data-name="패스 153"
							d="M14051.562-11344.129l9.137,11.231,14.863-18"
							transform="translate(-13106.562 11781.897)"
							fill="none"
							stroke="#fff"
							stroke-linecap="square"
							stroke-width="4"
						/>
					</g>
				</svg>
				<br />
				<p>{name}</p>
				<p>
					총 {quantity}주를 {buyOrSell() === "사기" ? "구매" : "판매"}
					하셨습니다.
				</p>
				<Button onClick={onClose}>확인</Button>
			</DoneModalFrame>
		);
	};

	return (
		<Modal>
			{!isDone ? (
				<ModalFrame id="modal">
					<p>{buyOrSell()}</p>
					<p>{price * quantity[0]}원</p>
					<div>
						<p>주문수량</p>
						<Range
							step={1}
							min={0}
							max={100}
							values={quantity}
							onChange={(values) => setQuantity(values)}
							renderTrack={({ props, children }) => (
								<div
									{...props}
									style={{
										...props.style,
										height: "3px",
										width: "50%",
										backgroundColor: COLOR.BLUE,
									}}
								>
									{children}
								</div>
							)}
							renderThumb={({ props }) => (
								<div
									{...props}
									style={{
										...props.style,
										height: "13px",
										width: "13px",
										borderRadius: "10px",
										backgroundColor: COLOR.BLUE,
									}}
								/>
							)}
						/>
						<input
							type="text"
							placeholder="1주"
							value={`${quantity[0]}주`}
							style={{
								textAlign: "right",
								height: "30px",
								width: "50px",
								border: "none",
								fontSize: "17px",
							}}
							onChange={(e) => {
								setQuantity([+e.currentTarget.value]);
							}}
						/>
					</div>
					<div>
						<p>총주문금액</p>
						<p>0원</p>
					</div>
					<div>
						<Button onClick={onClose}>취소</Button>
						<Button onClick={onDoneClick}>{buyOrSell()}</Button>
					</div>
				</ModalFrame>
			) : (
				configureDoneUI()
			)}
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
	backdrop-filter: blur(3px);
`;

const DoneModalFrame = styled.div`
	background-color: white;
	position: absolute;
	box-shadow: 3px 1px 3px 3px #7c7c7c;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 320px;
	width: 380px;

	& > p:nth-of-type(1) {
		padding-bottom: 0px;
		margin-top: 0px;
		margin-bottom: 0px;
		font-size: 18px;
	}

	& > p:nth-of-type(2) {
		color: #898989;
		margin-bottom: 30px;
	}

	& > button {
		background: ${COLOR.BLUE};
		width: 30%;
	}

	& > button:active {
		background: ${COLOR.GRAPH_BLUE};
	}
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

		& > input {
			width: 12%;
		}
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

		& > button:nth-of-type(1) {
			background-color: ${COLOR.BUTTON_INACTIVE};
			&:active {
				background: ${COLOR.BOX_BORDER};
			}
		}

		& > button:nth-of-type(2) {
			background-color: ${COLOR.BLUE};

			&:active {
				background: ${COLOR.GRAPH_BLUE};
			}
		}
	}
`;

const Button = styled.button`
	width: 45%;
	height: 50px;
	outline: none;
	border: none;
	border-radius: 5px;
	color: white;
	font-weight: 500;
`;

export default TradeModal;
