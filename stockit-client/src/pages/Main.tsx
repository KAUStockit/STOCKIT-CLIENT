// 메인 화면 컴포넌트
import React, { useState, useEffect } from "react";
import { Content, MainCards, MainCard, Circle, MainRank, MainBottom } from "./MainStyle";

// components
import StockList from "../components/Main/StockList";
import StockCard from "../components/Main/StockCard";
import { COLOR } from "../constants/theme";

// Pseudo Data
import { MAINPAGE_RANKLIST, MAINPAGE_PENNY } from "../utils/DemoData";

// interface
import { StockObject } from "../interfaces/MainInterface";

function Main() {
	// states
	const [stockRankList, setStockRankList] = useState(MAINPAGE_RANKLIST); // setter는 통신시 설정
	const [tenThousandStockList, setTenThousandStockList] = useState<StockObject[]>(MAINPAGE_PENNY); // setter는 통신시 설정
	const [selectedCard, setSelectedCard] = useState(0); // 인기순 / 시총순 / 수익률 순서

	// functions
	const onCardClick = (e: React.MouseEvent) => {
		let cardId = e.currentTarget.id;
		setSelectedCard(() => Number(cardId));
	};

	// side effects
	useEffect(() => {
		// user session
		!localStorage.getItem("session") ?? localStorage.setItem("session", "");
	}, []);

	return (
		<Content>
			<div>
				<h3>
					Stockit<b style={{ color: COLOR.BLUE }}> TOP100</b>
				</h3>
				{/* Cards start */}
				<MainCards>
					<MainCard onClick={onCardClick} id="0">
						<Circle color={"#4076EF"}>
							<img src="/img/card-first.png" alt="" width="100px" height="100px" />
						</Circle>
						<p>인기순 탑100</p>
					</MainCard>
					<MainCard onClick={onCardClick} style={{ backgroundColor: "#53E8C0" }} id="1">
						<Circle color={"#3BD1A9"}>
							<img src="/img/card-second.png" alt="" width="100px" height="100px" />
						</Circle>
						<p>시총순 탑100</p>
					</MainCard>
					<MainCard onClick={onCardClick} style={{ backgroundColor: "#6C45EF" }} id="2">
						<Circle color={"#5229D8"}>
							<img src="/img/card-third.png" alt="" width="100px" height="100px" />
						</Circle>
						<p>수익률 탑100</p>
					</MainCard>
				</MainCards>
				{/* Cards done */}

				{/* Rank Start */}
				<MainRank>
					<div>
						{stockRankList[selectedCard].map((stock, idx) => (
							<StockList key={idx} idx={idx + 1} id={stock.id} name={stock.name} rate={stock.rate} />
						))}
					</div>
				</MainRank>
				{/* Rank done */}

				<MainBottom>
					<h3>10000원으로 살 수 있는 주식</h3>
					<div>
						{tenThousandStockList.map((stock, idx) => (
							<StockCard key={idx} id={stock.id} name={stock.name} rate={stock.rate} />
						))}
					</div>
				</MainBottom>
			</div>
		</Content>
	);
}

export default Main;
