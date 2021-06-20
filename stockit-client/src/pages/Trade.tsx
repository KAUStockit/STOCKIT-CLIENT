// 거래소 화면
import React, { useState, useEffect, Suspense } from "react";
import styled from "@emotion/styled";

// components
import Chart from "../components/Trade/Chart";
import Entry from "../components/Trade/Entry";
import TradeModal from "../components/Trade/TradeModal";
import Article from "../components/Trade/Article";
import Chat from "../components/Trade/Chat";
import Spinner from "../components/common/Spinner";

// interface
import { LEVEL } from "../interfaces/MainInterface";
import { COLOR } from "../constants/theme";
import { TradeProp } from "../interfaces/TradeInterface";

// Component
const Trade: React.FC<TradeProp> = ({
	match,
	stockId,
	stockName,
	stockPrice,
}) => {
	const [sellModalDisplay, setSellModalDisplay] = useState(false);
	const [buyModalDisplay, setBuyModalDisplay] = useState(false);

	if (match) {
		stockId = match.params.stockId;
	}

	const onTradeClick = (e: React.MouseEvent) => {
		console.log(e.currentTarget.textContent);
		if (e.currentTarget.textContent === "사기") {
			setBuyModalDisplay(true);
		} else if (e.currentTarget.textContent === "팔기") {
			setSellModalDisplay(true);
		}
	};

	useEffect(() => {
		console.log(stockId);
		window.localStorage.setItem("lastStockId", String(stockId));
		// stockId로 주식정보 받아오기
		// 받아온 정보대로 데이터 업데이트
	}, [stockId]);

	return (
		<Suspense fallback={<Spinner />}>
			<Container>
				{/* Title start */}
				<Title className="chart__title">
					<StockName>
						<span>카카오게임즈</span>
						<span>53,500</span>
					</StockName>
					<TradeButtons>
						<button title="buy" onClick={onTradeClick}>
							사기
						</button>
						<button title="sell" onClick={onTradeClick}>
							팔기
						</button>
					</TradeButtons>
				</Title>
				{/* Title done */}

				<Grid>
					<Chart stockId={123} level={LEVEL.EASY} id="chart" />
					<Entry />
					<Article stockId={123} stockClass={"게임 엔터테인먼트"} />
					<Chat />
				</Grid>
				{buyModalDisplay && (
					<TradeModal
						type="buy"
						hide={setBuyModalDisplay}
						price={20000}
						name="카카오게임즈"
					/>
				)}
				{sellModalDisplay && (
					<TradeModal
						type="sell"
						hide={setSellModalDisplay}
						price={20000}
						name="카카오게임즈"
					/>
				)}
			</Container>
		</Suspense>
	);
};

//* css : @emotion/styled

const Container = styled.div`
	margin: 0 10% 0 10%;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 350px;
	column-gap: 30px;
	row-gap: 30px;
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	width: calc(100% - 380px);
	align-items: center;
	margin: 10px 0px;
	height: 50px;
	width: ${document.getElementById("chart")?.style.width};

	& > div:nth-of-type(2) {
		justify-self: end;
	}
`;

const StockName = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: baseline;
	width: 35%;
	min-width: 300px;
	font-weight: 700;
	font-size: 18px;

	& > span:nth-of-type(2) {
		margin-left: 20px;
		color: ${COLOR.BLUE};
		font-weight: 500;
	}
`;
const TradeButtons = styled.div`
	width: 150px;
	min-width: 150px;
	display: flex;
	justify-content: space-evenly;

	& > button {
		height: 30px;
		width: 7vh;
		background-color: white;
		border-radius: 50px;
		border: none;
		box-shadow: 1px 1px 1px 1px #e2e2e2;
		cursor: pointer;
	}
`;

export default Trade;
