// 메인 화면 컴포넌트
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { getCookie } from "../utils/Cookie";
import { REST_STOCK } from "../utils/Networking";
import StockCard from "../components/Main/StockCard";
import { COLOR } from "../constants/theme";
import ToolTip from "../components/common/ToolTip";
import { StockObject } from "../interfaces/MainInterface";
import { Stock } from "../interfaces/MainInterface";
import MainRank from "../components/Main/MainRank";
import MainCards from "../components/Main/MainCards";

function Main() {
	// states
	const [stockRankList, setStockRankList] = useState<StockObject[][]>([[]]); // setter는 통신시 설정
	const [tenThousandStockList, setTenThousandStockList] = useState<StockObject[]>([]); // setter는 통신시 설정
	const [selectedCard, setSelectedCard] = useState(0); // 인기순 / 시총순 / 수익률 순서

	// event handlers

	useEffect(() => {
		!localStorage.getItem("session") ?? localStorage.setItem("session", "");
		REST_STOCK.all(getCookie("user")?.token)
			.then((res) => res.data.data)
			.then((res) =>
				res
					.map((st: Stock) => {
						return { id: st.stockCode, name: st.stockName, price: st.price, rate: -20.21 };
					})
					.slice(3, 21)
			)
			.then((data) => setStockRankList([data, data, data]));
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
							<StockCard key={idx} id={stock.id} name={stock.name} rate={stock.rate} />
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
