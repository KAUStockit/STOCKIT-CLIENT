import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getCookie } from "../../utils/Cookie";

// Networking
import { REST_STOCK } from "../../utils/Networking";

// interface
import { TradingHistoryTabProp } from "../../interfaces/MyPageInterface";

const TradingHistoryTab: React.FC<TradingHistoryTabProp> = () => {
	const [cnt, setCnt] = useState(3);
	const user = getCookie('user');

	useEffect(() => {
		if(user) {
			(async () => {
				const result = await REST_STOCK.myOrders(user.token, user.memberIdx);
			})();
		}
	})

	return (
		<Container height={cnt}>
			<Table>
				<TableHeader>
					<span>종목명</span>
					<span>매도/매수</span>
					<span>체결단가</span>
					<span>체결수량</span>
					<span>날짜</span>
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

//* css : @emotion/styled
const Container = styled.div<{ height: number }>`
	height: ${(props) => props.height * 100}px;
	& > div {
		width: 100%;
		height: 200px;
		display: flex;
		align-items: center;
	}
`;

const Table = styled.div`
	width: 100%;
	font-size: 13px;
	display: flex;
	flex-direction: column;
`;

const TableHeader = styled.div`
	background: #e2e2e2;
	width: 90%;
	padding-left: 5%;
	padding-right: 5%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	height: 35px;
	align-items: center;
	margin-bottom: 20px;

	& > span {
		display: inline-block;
		text-align: center;
		line-height: 1em;
	}
`;

const TableBody = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Row = styled.div<{ buySell: string }>`
	-webkit-box-shadow: 0px 0px 2px 0px #bebebe;
	box-shadow: 0px 0px 2px 0px #bebebe;
	height: 50px;
	width: 90%;
	margin: 10px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	justify-items: center;
	align-items: center;

	& > div:nth-of-type(2) {
		color: ${(props) => (props.buySell === "매도" ? "blue" : "red")};
	}
`;

export default TradingHistoryTab;
