import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../constants/theme";
import { useState } from "react";

// components
import BalanceTab from "../components/MyPage/BalanceTab";
import TradingHistoryTab from "../components/MyPage/TradingHistoryTab";
import Ranking from "../components/MyPage/Ranking";

// interface
type MyPageProp = {};

const MyPage: React.FC<MyPageProp> = () => {
	const [currentTab, setCurrentTab] = useState<string>("보유주식");

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
						<BalanceTab />
					) : (
						<TradingHistoryTab />
					)}
				</div>
			</LeftMenu>
			<Ranking />
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

	& > div:nth-of-type(1) {
		height: 40px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid ${COLOR.BOX_BORDER};

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
