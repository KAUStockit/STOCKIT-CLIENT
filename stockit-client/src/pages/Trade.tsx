// 거래소 화면
import React, { useState, useContext } from "react";
import { useVersionContext } from "../App";
import styled from "@emotion/styled";

// components
import Chart from "../components/Trade/Chart";
import Entry from "../components/Trade/Entry";
import TradeModal from "../components/Trade/TradeModal";
import Article from "../components/Trade/Article";
import Chat from "../components/Trade/Chat";

// interface
import { LEVEL } from "../App";
import { COLOR } from "../constants/theme";
type TradeProp = {
	stockId: number;
	stockName: string;
	stockPrice: number;
};

const Trade: React.FC<TradeProp> = ({ stockId, stockName, stockPrice }) => {
	const { isAdvanced, setIsAdvanced }: any = useVersionContext();

	const [sellModalDisplay, setSellModalDisplay] = useState(false);
	const [buyModalDisplay, setBuyModalDisplay] = useState(false);

	const onTradeClick = (e: React.MouseEvent) => {
		console.log(e.currentTarget.textContent);
		if (e.currentTarget.textContent === "사기") {
			setBuyModalDisplay(true);
		} else if (e.currentTarget.textContent === "팔기") {
			setSellModalDisplay(true);
		}
	};
	return (
		<Container>
			{/* <div>{isAdvanced && "고급버전"}</div>
			<div>거래소페이지입니다.</div> */}
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
			<Grid>
				<Chart stockId={123} level={LEVEL.EASY} />
				<Entry />
				<Article stockId={123} stockClass={"게임 엔터테인먼트"} />
				<Chat />
			</Grid>
			{buyModalDisplay && (
				<TradeModal type="buy" hide={setBuyModalDisplay} />
			)}
			{sellModalDisplay && (
				<TradeModal type="sell" hide={setSellModalDisplay} />
			)}
		</Container>
	);
};

//* css : @emotion/styled

const Container = styled.div`
	margin: 0 10% 0 10%;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	column-gap: 30px;
	row-gap: 30px;
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 65%;
`;

const StockName = styled.div`
	height: 50px;
	margin-top: 20px;
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
	}
`;

export default Trade;
