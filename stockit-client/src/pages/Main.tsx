// 메인 화면 컴포넌트
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

// components
import StockList from "../components/Main/StockList";
import StockCard from "../components/Main/StockCard";
import { COLOR } from "../constants/theme";

// Pseudo Data
import { MAINPAGE_RANKLIST, MAINPAGE_PENNY } from "../utils/DemoData";

// interface
type StockObject = {
	id: number;
	name: string;
	price: number;
	rate: number;
};

function Main() {
	const [stockRankList, setStockRankList] = useState(MAINPAGE_RANKLIST);
	const [tenThousandStockList, setTenThousandStockList] =
		useState<StockObject[]>(MAINPAGE_PENNY);

	const [selectedCard, setSelectedCard] = useState(0);
	const onCardClick = (e: React.MouseEvent) => {
		let cardId = e.currentTarget.id;
		setSelectedCard(() => Number(cardId));
	};

	useEffect(() => {
		!localStorage.getItem("session") ?? localStorage.setItem("session", "");
	}, []);

	return (
		<Content>
			<div>
				<h3>
					Stockit<b style={{ color: COLOR.BLUE }}> TOP100</b>
				</h3>
				<MainCards>
					<MainCard onClick={onCardClick} id="0">
						<Circle color={"#4076EF"}>
							<img
								src="/img/card-first.png"
								alt=""
								width="100px"
								height="100px"
							/>
						</Circle>
						<p>인기순 탑100</p>
					</MainCard>
					<MainCard
						onClick={onCardClick}
						style={{ backgroundColor: "#53E8C0" }}
						id="1"
					>
						<Circle color={"#3BD1A9"}>
							<img
								src="/img/card-second.png"
								alt=""
								width="100px"
								height="100px"
							/>
						</Circle>
						<p>시총순 탑100</p>
					</MainCard>
					<MainCard
						onClick={onCardClick}
						style={{ backgroundColor: "#6C45EF" }}
						id="2"
					>
						<Circle color={"#5229D8"}>
							<img
								src="/img/card-third.png"
								alt=""
								width="100px"
								height="100px"
							/>
						</Circle>
						<p>수익률 탑100</p>
					</MainCard>
				</MainCards>
				<MainRank>
					<div>
						{stockRankList[selectedCard].map((stock, idx) => (
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
	margin: 50px 15% 0 15%;
`;

const MainCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 20px;
`;

const MainCard = styled.div`
	width: 20vw;
	min-width: 270px;
	height: 20vh;
	background-color: ${COLOR.GRAPH_BLUE};
	border-radius: 10px;
	margin-right: 20px;

	& > p {
		color: white;
		display: block;
		position: relative;
		right: -50%;
		bottom: -30%;
		font-weight: 800;
		font-size: 20px;
	}
`;

const MainRank = styled.div`
	margin-top: 30px;

	& > div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 20px;

		& > div {
			width: 20vw;
			min-width: 270px;
			margin-right: 10px;
			padding-left: 10px;
		}
	}
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
		overflow-x: auto;
	}

	& > div > div {
		margin-right: 20px;
	}
`;

const Circle = styled.div<{ color: string }>`
	background: ${(props) => props.color};
	width: 50px;
	height: 50px;
	border-radius: 40px;
	margin-left: 10px;
	margin-top: 10px;

	display: flex;
	justify-content: center;
	align-items: center;

	& > img {
		width: 30px;
		height: 30px;
	}
`;

export default Main;
