// 거래소 화면

import React, { useState, useContext } from "react";
import { useVersionContext } from "../App";

// components
import Chart from "../components/Trade/Chart";
import Entry from "../components/Trade/Entry";
import TradeModal from "../components/Trade/TradeModal";
import Article from "../components/Trade/Article";
import Chat from "../components/Trade/Chat";

// interface
import { LEVEL } from "../App";
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
		<>
			{/* <div>{isAdvanced && "고급버전"}</div>
			<div>거래소페이지입니다.</div> */}
			<div className="chart__title">
				<div>
					<span>카카오게임즈</span>
					<span>53,500</span>
				</div>
				<div>
					<button onClick={onTradeClick}>사기</button>
					<button onClick={onTradeClick}>팔기</button>
				</div>
			</div>
			<Chart stockId={123} level={LEVEL.EASY} />
			<Entry />
			<Article stockId={123} stockClass={"게임 엔터테인먼트"} />
			<Chat />

			{buyModalDisplay && (
				<TradeModal type="buy" hide={setBuyModalDisplay} />
			)}
			{sellModalDisplay && (
				<TradeModal type="sell" hide={setSellModalDisplay} />
			)}
		</>
	);
};

export default Trade;
