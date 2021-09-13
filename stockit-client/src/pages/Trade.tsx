// 거래소 화면
import React, { useState, useEffect, Suspense, useRef } from "react";
import { Container, Title, StockName, TradeButtons, Grid } from "./TradeStyle";

// components
import Chart from "../components/Trade/Chart";
import Entry from "../components/Trade/Entry";
import TradeModal from "../components/Trade/TradeModal";
import Article from "../components/Trade/Article";
import Chat from "../components/Trade/Chat";
import Spinner from "../components/common/Spinner";
import { useRecoilValue } from "recoil";
import { userState } from "../model/User";

// interface
import { LEVEL } from "../interfaces/MainInterface";
import { TradeProp } from "../interfaces/TradeInterface";

// Component
import ToolTip from "../components/common/ToolTip";
import { REST_STOCK } from "../utils/Networking";

const Trade: React.FC<TradeProp> = ({ match, stockId }) => {
	const [sellModalDisplay, setSellModalDisplay] = useState(false);
	const [buyModalDisplay, setBuyModalDisplay] = useState(false);

	const [stockName, setStockName] = useState<string>("");
	const [stockCurrentPrice, setStockCurrentPrice] = useState<number>(0);

	const user = useRecoilValue(userState);

	// ref
	const stockNameRef = useRef<any>();
	const stockCurrentPriceRef = useRef<any>();

	if (match) {
		stockId = match.params.stockId;
	}

	const onTradeClick = (e: React.MouseEvent) => {
		if (user.memberIdx === 0) {
			alert("로그인 후 이용해주세요");
			return;
		}
		if (e.currentTarget.textContent === "사기") {
			setBuyModalDisplay(true);
		} else if (e.currentTarget.textContent === "팔기") {
			setSellModalDisplay(true);
		}
	};

	const onMouseMoveTradeButtons = (e: React.MouseEvent) => {
		const tooltip = document.getElementById("tooltip");
		tooltip!.style.display = "block";
		tooltip!.style.top = `${e.pageY}px`;
		tooltip!.style.left = `${e.pageX}px`;
		tooltip!.innerText = e.currentTarget.innerHTML;
	};

	const onMouseLeave = (e: React.MouseEvent) => {
		document.getElementById("tooltip")!.style.display = "none";
	};

	useEffect(() => {
		window.localStorage.setItem("lastStockId", String(stockId));
		// stockId로 주식정보 받아오기
		(async () => {
			const { data } = await REST_STOCK.getStock(stockId);
			console.log(data);
			if (!data.data) return;
			setStockName(data.data.stockName);
			setStockCurrentPrice(data.data.price);
		})();

		// 받아온 정보대로 데이터 업데이트
	}, []);

	const displayCurrency = (amount: number) => amount.toLocaleString("ko-KR");

	return (
		<Suspense fallback={<Spinner />}>
			<Container>
				{/* Title start */}
				<Title className="chart__title">
					<StockName>
						<img src="/img/kakaogames.png" alt="" />
						<span ref={stockNameRef}>{stockName}</span>
						<span ref={stockCurrentPriceRef}>{displayCurrency(stockCurrentPrice)}</span>
					</StockName>
					<TradeButtons onMouseLeave={onMouseLeave}>
						<button title="buy" onClick={onTradeClick} onMouseMove={onMouseMoveTradeButtons}>
							사기
						</button>
						<button title="sell" onClick={onTradeClick} onMouseMove={onMouseMoveTradeButtons}>
							팔기
						</button>
					</TradeButtons>
				</Title>
				{/* Title done */}

				<Grid>
					<Chart stockId={stockId} level={LEVEL.EASY} id="chart" />
					<Entry />
					<Article stockId={stockId} />
					<Chat />
				</Grid>
				{buyModalDisplay && (
					<TradeModal type="buy" hide={setBuyModalDisplay} price={stockCurrentPrice} name={stockName} />
				)}
				{sellModalDisplay && (
					<TradeModal type="sell" hide={setSellModalDisplay} price={stockCurrentPrice} name={stockName} />
				)}
			</Container>
			<ToolTip content="hihi" />
		</Suspense>
	);
};

export default Trade;
