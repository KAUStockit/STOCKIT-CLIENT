import React from "react";
import { currency } from "../../utils/utils";
import { Row } from "./HistoryItemStyle";

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

export default HistoryItem;
