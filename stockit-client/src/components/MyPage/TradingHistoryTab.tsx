import React, { useEffect, useState } from "react";
import { Container, Table, TableHeader, TableBody } from "./TradingHistoryTabStyle";
import { getCookie } from "../../utils/Cookie";
import HistoryItem from "./HistoryItem";

// Networking
import { REST_STOCK } from "../../utils/Networking";

// interface
import { TradingHistoryTabProp } from "../../interfaces/BalanceInterface";

const TradingHistoryTab: React.FC<TradingHistoryTabProp> = () => {
	const [cnt] = useState(3);
	const [histories, setHistories] = useState<any>([]);
	const user = getCookie("user");

	useEffect(() => {
		user && getHistoryData();
	}, []);

	const getHistoryData = async () => {
		const result = await REST_STOCK.myOrders(user.token, user.id);
		console.log(result);
		const {
			data: {
				data: { orders },
			},
		} = result;
		if (!orders) return;
		setHistories(orders);
	};

	return (
		<Container height={cnt}>
			<Table>
				<TableHeader>
					<div>종목명</div>
					<div>매도/매수</div>
					<div>체결단가</div>
					<div>체결수량</div>
					<div>날짜</div>
				</TableHeader>
				<TableBody>
					{histories.map((item: any, idx: number) => (
						<HistoryItem
							key={idx}
							stock={item.stock}
							stockOrderCount={item.stockOrderCount}
							stockOrderPrice={item.stockOrderPrice}
							stockOrderedDate={item.stockOrderedDate}
							type={item.type}
							orderIdx={item.orderIdx}
						></HistoryItem>
					))}
				</TableBody>
			</Table>
		</Container>
	);
};

export default TradingHistoryTab;
