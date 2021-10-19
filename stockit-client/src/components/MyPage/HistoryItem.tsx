import React from "react";
import styled from "@emotion/styled";
import { currency } from "../../utils/utils";

interface HistoryItemProps {
	stock: any;
	stockOrderCount: number;
	stockOrderedDate: string;
	stockOrderPrice: number;
	type: string;
	orderIdx: number;
}

const HistoryItem: React.FC<HistoryItemProps> = ({
	stock,
	stockOrderCount,
	stockOrderPrice,
	stockOrderedDate,
	type,
	orderIdx,
}) => {
	const convertDateFormat = (d: string) => {
		const date = new Date(d);
		return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate() + 1}일`;
	};

	return (
		<Row buySell={type === "사기" ? "매수" : "매도"}>
			<div>
				<img src="" alt="" />
				<span>{stock.stockName}</span>
			</div>
			<div>{type === "사기" ? "구매" : "판매"}</div>
			<div>{currency(stockOrderPrice)}</div>
			<div>{stockOrderCount}개</div>
			<div>{convertDateFormat(stockOrderedDate)}</div>
		</Row>
	);
};

export const Row = styled.div<{ buySell: string }>`
	-webkit-box-shadow: 0px 0px 2px 0px #bebebe;
	box-shadow: 0px 0px 2px 0px #bebebe;
	height: 50px;
	width: 90%;
	margin: 10px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	justify-items: center;

	& > div {
		display: flex;
		align-items: center;
	}

	& > div:nth-of-type(2) {
		color: ${(props) => (props.buySell === "매도" ? "blue" : "red")};
	}
`;

export default HistoryItem;
