import React from "react";
import styled from "@emotion/styled";

import { Button } from "./TradeModalStyle";
import { COLOR } from "../../constants/theme";

interface TradeModalDoneInterface {
	name: string;
	quantity: Array<number>;
	onClose: () => void;
	buyOrSell: string;
}

const TradeModalDone: React.FC<TradeModalDoneInterface> = ({ name, quantity, onClose, buyOrSell }) => {
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
					/>
				</g>
			</svg>
			<br />
			<p>{name}</p>
			<p>
				총 {quantity}주를 {buyOrSell === "사기" ? "구매" : "판매"}
				하셨습니다.
			</p>
			<Button onClick={onClose}>확인</Button>
		</DoneModalFrame>
	);
};

export const DoneModalFrame = styled.div`
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

export default TradeModalDone;
