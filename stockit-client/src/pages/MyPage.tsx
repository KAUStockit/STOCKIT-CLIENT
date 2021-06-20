import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../constants/theme";
import { useState } from "react";

// components
import BalanceTab from "../components/MyPage/BalanceTab";
import TradingHistoryTab from "../components/MyPage/TradingHistoryTab";
import Ranking from "../components/MyPage/Ranking";

// pseudo data
import { myStockData } from "../utils/DemoData";

// interface
import { MyPageProp } from "../interfaces/MyPageInterface";

const MyPage: React.FC<MyPageProp> = () => {
	const [currentTab, setCurrentTab] = useState<string>("보유주식");
	const [myStock, setMyStock] = useState(myStockData);

	const onTabClicked = (e: React.MouseEvent) => {
		if (
			currentTab === "보유주식" &&
			e.currentTarget.innerHTML === "거래내역"
		) {
			setCurrentTab("거래내역");
		} else if (
			currentTab === "거래내역" &&
			e.currentTarget.innerHTML === "보유주식"
		) {
			setCurrentTab("보유주식");
		}
	};

	return (
		<Container>
			<LeftMenu>
				<div>
					<div onClick={onTabClicked}>보유주식</div>
					<div onClick={onTabClicked}>거래내역</div>
				</div>
				<div>
					{currentTab === "보유주식" ? (
						<BalanceTab myStock={myStock} />
					) : (
						<TradingHistoryTab />
					)}
				</div>
			</LeftMenu>
			<Ranking name="imnotmoon" rank={1} />
		</Container>
	);
};

//* css : @emotion/styled
const Container = styled.div`
	margin: 40px 10% 0 10%;
	display: grid;
	grid-template-columns: 2fr 1fr;
`;

const LeftMenu = styled.div`
	margin-right: 20px;
	box-shadow: 1px 1px 5px ${COLOR.BOX_BORDER};

	& > div:nth-of-type(1) {
		height: 40px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid ${COLOR.BOX_BORDER};

		& > div {
			padding: 0 15px 0 15px;
			border-right: 1px solid ${COLOR.BOX_BORDER};
			height: 100%;
			display: flex;
			align-items: center;
			cursor: pointer;
		}
	}
`;

export default MyPage;
