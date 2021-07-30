import React, { useState } from "react";
import { Container, LeftMenu } from "./MyPageStyle";

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
		if (currentTab === "보유주식" && e.currentTarget.innerHTML === "거래내역") {
			setCurrentTab("거래내역");
		} else if (currentTab === "거래내역" && e.currentTarget.innerHTML === "보유주식") {
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
				<div>{currentTab === "보유주식" ? <BalanceTab myStock={myStock} /> : <TradingHistoryTab />}</div>
			</LeftMenu>
			<Ranking name="imnotmoon" rank={1} />
		</Container>
	);
};

export default MyPage;
