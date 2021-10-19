// 사기 / 팔기 버튼을 눌렀을때 뜨는 모달창 컴포넌트

import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Range } from "react-range";

import { COLOR } from "../../constants/theme";
import { REST_STOCK } from "../../utils/Networking";
import { userState } from "../../model/User";
import { getCookie } from "../../utils/Cookie";
import { currency } from "../../utils/utils";
import { TradeModalProp } from "../../interfaces/TradeInterface";
import { Button, Modal, ModalFrame } from "./TradeModalStyle";
import TradeModalDone from "./TradeModalDone";

const TradeModal: React.FC<TradeModalProp> = ({ type, hide, price, name, id }) => {
	const [isDone, setIsDone] = useState(false);
	const [quantity, setQuantity] = useState([50]);
	const user = useRecoilValue(userState);
	const token = getCookie("user").token;

	const buyOrSell = (() => (type === "buy" ? "사기" : "팔기"))();

	const onDoneClick = async () => {
		await REST_STOCK.order(token, user.id, id, {
			stockOrderPrice: price,
			stockOrderCount: quantity[0],
			orderType: buyOrSell,
		});
		setIsDone(true);
	};

	const onClose = () => {
		hide(false);
	};

	return (
		<Modal>
			{!isDone ? (
				<ModalFrame id="modal">
					<p>{buyOrSell}</p>
					<p>{currency(price * quantity[0])}원</p>
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
						<Button onClick={onDoneClick}>{buyOrSell}</Button>
					</div>
				</ModalFrame>
			) : (
				<TradeModalDone name={name} quantity={quantity} onClose={onClose} buyOrSell={buyOrSell} />
			)}
		</Modal>
	);
};

export default TradeModal;
