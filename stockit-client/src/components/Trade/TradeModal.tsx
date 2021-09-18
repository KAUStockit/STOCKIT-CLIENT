// 사기 / 팔기 버튼을 눌렀을때 뜨는 모달창 컴포넌트

import React, { useState } from "react";
import { COLOR } from "../../constants/theme";
import { Range } from "react-range";
import { REST_STOCK } from "../../utils/Networking";
import { useRecoilValue } from "recoil";
import { userState } from "../../model/User";
import { getCookie } from "../../utils/Cookie";
import { currency } from "../../utils/utils";

// interface
import { TradeModalProp } from "../../interfaces/TradeInterface";
import { DoneModalFrame, Button, Modal, ModalFrame } from "./TradeModalStyle";

const TradeModal: React.FC<TradeModalProp> = ({ type, hide, price, name, id }) => {
	const [isDone, setIsDone] = useState(false);
	const [quantity, setQuantity] = useState([50]);
	const user = useRecoilValue(userState);
	const token = getCookie("user").token;

	const onClose = () => {
		hide(false);
	};

	const buyOrSell = () => (type === "buy" ? "사기" : "팔기");

	const onDoneClick = async () => {
		const result = await REST_STOCK.order(token, user.memberIdx, id, {
			stockOrderPrice: price,
			stockOrderCount: quantity[0],
			orderType: buyOrSell(),
		});
		setIsDone(true);
	};

	const configureDoneUI = () => {
		return (
			<DoneModalFrame>
				<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62">
					<g id="그룹_139" data-name="그룹 139" transform="translate(-926 -406)">
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
							// stroke-linecap="square"
							// stroke-width="4"
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
						<Button onClick={onDoneClick}>{buyOrSell()}</Button>
					</div>
				</ModalFrame>
			) : (
				configureDoneUI()
			)}
		</Modal>
	);
};

export default TradeModal;
