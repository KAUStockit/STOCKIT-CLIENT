import React, { useEffect, useState } from "react";
import { Container, Table, TableHeader, TableBody, Row } from "./TradingHistoryTabStyle";
import { getCookie } from "../../utils/Cookie";

// Networking
import { REST_STOCK } from "../../utils/Networking";

// interface
import { TradingHistoryTabProp } from "../../interfaces/BalanceInterface";

const TradingHistoryTab: React.FC<TradingHistoryTabProp> = () => {
	const [cnt, setCnt] = useState(3);
	const user = getCookie("user");

	useEffect(() => {
		if (user) {
			(async () => {
				const result = await REST_STOCK.myOrders(user.token, user.memberIdx);
				console.log(result.data);
			})();
		}
	});

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
					<Row buySell={"매도"}>
						<div>
							<img src="" alt="" />
							<span>카카오게임즈</span>
						</div>
						<div>매도</div>
						<div>4,909</div>
						<div>30개</div>
						<div>2021.04.05</div>
					</Row>
					<Row buySell={"매수"}>
						<div>
							<img src="" alt="" />
							<span>카카오게임즈</span>
						</div>
						<div>매수</div>
						<div>4,909</div>
						<div>30개</div>
						<div>2021.04.05</div>
					</Row>
					<Row buySell={"매도"}>
						<div>
							<img src="" alt="" />
							<span>카카오게임즈</span>
						</div>
						<div>매도</div>
						<div>4,909</div>
						<div>30개</div>
						<div>2021.04.05</div>
					</Row>
					<Row buySell={"매수"}>
						<div>
							<img src="" alt="" />
							<span>카카오게임즈</span>
						</div>
						<div>매수</div>
						<div>4,909</div>
						<div>30개</div>
						<div>2021.04.05</div>
					</Row>
					<Row buySell={"매수"}>
						<div>
							<img src="" alt="" />
							<span>카카오게임즈</span>
						</div>
						<div>매수</div>
						<div>4,909</div>
						<div>30개</div>
						<div>2021.04.05</div>
					</Row>
				</TableBody>
			</Table>
		</Container>
	);
};

export default TradingHistoryTab;
