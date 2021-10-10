import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { REST_STOCK } from "../../utils/Networking";
import { getCookie } from "../../utils/Cookie";
import HistoryItem from "./HistoryItem";
import { TradingHistoryTabProp } from "../../interfaces/BalanceInterface";
import OrderInterface from "../../interfaces/OrderInterface";

const TradingHistoryTab: React.FC<TradingHistoryTabProp> = () => {
	const [cnt] = useState<number>(3);
	const [histories, setHistories] = useState<any>([]);
	const user = getCookie("user");

	useEffect(() => {
		user && getHistoryData();
	}, []);

	const getHistoryData = async () => {
		const result = await REST_STOCK.myOrders(user.token, user.id);
		const orders: Array<OrderInterface> = result.data?.data;
		if (!orders) return;
		console.log(orders);
		setHistories(orders);
	};

	return (
		<Container height={cnt}>
			<Table>
				<TableHeader>
					{tableHeaders.map((header, idx) => (
						<div key={idx}>{header}</div>
					))}
				</TableHeader>
				<TableBody>
					{histories.map((item: OrderInterface) => (
						<HistoryItem
							key={item.id}
							stock={item.stockInfo}
							stockOrderCount={item.stockOrderCount}
							stockOrderPrice={item.stockOrderPrice}
							stockOrderedDate={item.stockOrderedDate.toString()}
							type={item.type}
							orderIdx={item.id}
						></HistoryItem>
					))}
				</TableBody>
			</Table>
		</Container>
	);
};

const tableHeaders = ["종목명", "매도/매수", "체결단가", "체결수량", "날짜"];

export const Container = styled.div<{ height: number }>`
	height: ${(props) => props.height * 100}px;
	& > div {
		width: 100%;
		height: 200px;
		display: flex;
		align-items: center;
	}
`;
export const Table = styled.div`
	width: 100%;
	font-size: 13px;
	display: flex;
	flex-direction: column;
`;
export const TableHeader = styled.div`
	background: rgba(226, 226, 226, 0.3);
	width: 90%;
	padding-left: 5%;
	padding-right: 5%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	align-items: center;
	margin-bottom: 20px;

	& > div {
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 2em;
		height: 40px;
	}
`;
export const TableBody = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default TradingHistoryTab;
