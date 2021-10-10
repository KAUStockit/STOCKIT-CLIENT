import styled from "@emotion/styled";

import { COLOR } from "../../constants/theme";
import Doughnutchart from "./DoghnutChart";
import { PIE_CHART_DATA, myStockData } from "../../utils/DemoData";
import { BalanceTabProp, MyStock } from "../../interfaces/TradeInterface";
import { useState } from "react";
import MyPageSummary from "./MyPageSummary";
import BalanceTabPages from "./BalanceTabPages";

const BalanceTab: React.FC<BalanceTabProp> = ({ myStock }) => {
	const [myStocks] = useState<MyStock[]>(myStockData);
	return (
		<Container>
			<div>
				<Doughnutchart chartData={PIE_CHART_DATA} />
				<MyPageSummary />
			</div>
			<div>
				<p>보유 주식 목록</p>
			</div>
			<div>
				{tableHeaders.map((header, idx) => (
					<p key={idx}>{header}</p>
				))}
			</div>
			<BalanceTabPages />
		</Container>
	);
};

const Container = styled.div`
	& > div:nth-of-type(1) {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: row;
		border-bottom: 1px solid ${COLOR.BOX_BORDER};
	}

	& > div:nth-of-type(2) {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: row;
		height: 40px;

		& > p {
			font-size: 15px;
			padding-left: 20px;
		}
	}

	& > div:nth-of-type(3) {
		width: 96%;
		padding: 0 2%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		background-color: rgba(226, 226, 226, 0.3);
		height: 40px;
		font-size: 14px;

		& > p {
			display: block;
			padding-left: 20px;
			padding-right: 20px;
		}
	}
`;

const tableHeaders = ["종목명", "보유수량", "매수평균가", "평가금액", "평가손익"];

export default BalanceTab;

// pseudo data
