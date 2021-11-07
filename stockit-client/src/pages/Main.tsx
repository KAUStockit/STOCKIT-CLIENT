// 메인 화면 컴포넌트
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { REST_STOCK } from "../utils/Networking";
import { COLOR } from "../constants/theme";
import { StockObject, Stock } from "../interfaces/MainInterface";
import MainRank from "../components/Main/MainRank";
import MainCards from "../components/Main/MainCards";
import StockCard from "../components/Main/StockCard";
import ToolTip from "../components/common/ToolTip";

function Main() {
	const [stockRankList, setStockRankList] = useState<StockObject[][]>([[]]);
	const [tenThousandStockList, setTenThousandStockList] = useState<Stock[]>([]);
	const [selectedCard, setSelectedCard] = useState(0); // 인기순 / 시총순 / 수익률 순서
	console.log(tenThousandStockList);

	useEffect(() => {
		!localStorage.getItem("session") ?? localStorage.setItem("session", "");
		REST_STOCK.all()
			.then((res) => res.data.data)
			.then((res) =>
				res
					.map((st: Stock) => {
						return { id: st.stockCode, name: st.stockName, price: st.price, rate: -20.21 };
					})
					.slice(3, 21)
			)
			.then((data) => setStockRankList([data, data, data]));
		REST_STOCK.getStocksUnderPrice10000()
			.then((res) => res.data.data)
			.then(setTenThousandStockList);
	}, []);

	return (
		<Content>
			<div>
				<h3>
					Stockit<b style={{ color: COLOR.BLUE }}> TOP100</b>
				</h3>
				<MainCards setSelectedCard={setSelectedCard} />
				<MainRank selectedCard={selectedCard} stockRankList={stockRankList} />
				<MainBottom>
					<h3>10000원으로 살 수 있는 주식</h3>
					<div>
						{tenThousandStockList.map((stock, idx) => (
							<StockCard key={idx} id={stock.stockCode} name={stock.stockName} price={stock.price} />
						))}
					</div>
				</MainBottom>
			</div>
			<ToolTip content="hihi" />
		</Content>
	);
}

const Content = styled.div`
	margin: 50px 15% 0 15%;
`;

const MainBottom = styled.div`
	margin-top: 50px;

	& > h3 {
		font-weight: 700;
		font-size: 18px;
	}

	& > div {
		display: flex;
		justify-content: flex-start;
		width: 68vw;
	}

	& > div > div {
		margin-right: 20px;
		width: 20vw;
	}
`;

export default Main;
