import React from "react";
import styled from "@emotion/styled";

import StockList from "./StockList";
import { StockObject } from "../../interfaces/MainInterface";

interface MainRankInterface {
	stockRankList: StockObject[][];
	selectedCard: number;
}

const MainRank = ({ stockRankList, selectedCard }: MainRankInterface) => {
	return (
		<Container>
			<div>
				{stockRankList[selectedCard].slice(0, 6).map((stock, idx) => (
					<StockList key={idx} idx={idx + 1} id={stock.id} name={stock.name} rate={stock.rate} />
				))}
			</div>
			<div>
				{stockRankList[selectedCard].slice(6, 12).map((stock, idx) => (
					<StockList key={idx} idx={idx + 7} id={stock.id} name={stock.name} rate={stock.rate} />
				))}
			</div>
			<div>
				{stockRankList[selectedCard].slice(12).map((stock, idx) => (
					<StockList key={idx} idx={idx + 13} id={stock.id} name={stock.name} rate={stock.rate} />
				))}
			</div>
		</Container>
	);
};

export const Container = styled.div`
	margin-top: 30px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	& > div {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 20px;

		& > div {
			width: 20vw;
			min-width: 270px;
			margin-right: 10px;
			padding-left: 10px;
		}
	}
`;

export default MainRank;
