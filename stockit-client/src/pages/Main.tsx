// 메인 화면 컴포넌트
import React, { useState } from "react";
import styled from "@emotion/styled";

// components
import StockList from "../components/Main/StockList";
import StockCard from "../components/Main/StockCard";
import { COLOR } from "../constants/theme";

// interface
type StockObject = {
	id: number;
	name: string;
	price: number;
	rate: number;
};

function Main() {
	const [popularStockList, setPopularStockList] = useState<StockObject[]>([
		{ id: 123, name: "대한항공", price: 999, rate: 3 },
		{ id: 124, name: "카카오게임즈", price: 1050, rate: 13 },
	]);
	const [valuableStockList, setValuableStockList] = useState<StockObject[]>([
		{ id: 3, name: "삼성전자", price: 82400, rate: -5 },
		{ id: 50, name: "SK하이닉스", price: 140000, rate: 0.3 },
	]);
	const [raisedStockList, setRaisedStockList] = useState<StockObject[]>([
		{ id: 32, name: "대원미디어", price: 26000, rate: 85.3 },
		{ id: 44, name: "HMM", price: 56000, rate: 69.4 },
	]);
	const [tenThousandStockList, setTenThousandStockList] = useState<
		StockObject[]
	>([
		{ id: 36, name: "이트론", price: 675, rate: 1.7 },
		{ id: 11, name: "LG화학", price: 900, rate: 3.7 },
	]);

	return (
		<Content>
			<div>
				<h3>
					Stockit<b style={{ color: COLOR.BLUE }}> TOP100</b>
				</h3>
				<MainCards>
					<MainCard>
						<p>인기순 탑100</p>
					</MainCard>
					<MainCard>
						<p>시총순 탑100</p>
					</MainCard>
					<MainCard>
						<p>수익률 탑100</p>
					</MainCard>
				</MainCards>
				<MainRank>
					<div>
						{popularStockList.map((stock, idx) => (
							<StockList
								key={idx}
								idx={idx + 1}
								id={stock.id}
								name={stock.name}
								rate={stock.rate}
							/>
						))}
					</div>
					<div>
						{valuableStockList.map((stock, idx) => (
							<StockList
								key={idx}
								idx={idx + 1}
								id={stock.id}
								name={stock.name}
								rate={stock.rate}
							/>
						))}
					</div>
					<div>
						{raisedStockList.map((stock, idx) => (
							<StockList
								key={idx}
								idx={idx + 1}
								id={stock.id}
								name={stock.name}
								rate={stock.rate}
							/>
						))}
					</div>
				</MainRank>
				<MainBottom>
					<h3>10000원으로 살 수 있는 주식</h3>
					<div>
						{tenThousandStockList.map((stock, idx) => (
							<StockCard
								key={idx}
								name={stock.name}
								rate={stock.rate}
							/>
						))}
					</div>
				</MainBottom>
			</div>
		</Content>
	);
}

//* css : @emotion/styled

const Content = styled.div`
	margin: 50px 10% 0 10%;
`;

const MainCards = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	overflow-x: auto;
`;

const MainCard = styled.div`
	min-width: 270px;
	max-width: 270px;
	height: 20vh;
	background-color: ${COLOR.GRAPH_BLUE};
	border-radius: 10px;
	margin-right: 20px;

	& > p {
		color: white;
		display: block;
		position: relative;
		right: -120px;
		bottom: -120px;
		font-weight: 700px;
		font-size: 20px;
	}
`;

const MainRank = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 30px;
	overflow: auto;
`;

const MainBottom = styled.div`
	margin-top: 50px;

	& > h3 {
		font-weight: 700;
		font-size: 18px;
	}

	& > div {
		display: flex;
		justify-content: space-around;
	}
`;

export default Main;
