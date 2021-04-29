import React, { useState } from "react";

// components
import StockList from "../components/Main/StockList";
import StockCard from "../components/Main/StockCard";

type StockObject = {
	id: number;
	name: string;
	price: number;
	rate: number;
};

function Main() {
	const [popularStockList, setPopularStockList] = useState<StockObject[]>([
		{ id: 123, name: "대한항공", price: 999, rate: 3 },
		{ id: 124, name: "카카오게임즈", price: 1050, rate: 13 },
	]);
	const [valuableStockList, setValuableStockList] = useState<StockObject[]>([
		{ id: 3, name: "삼성전자", price: 82400, rate: -5 },
		{ id: 50, name: "SK하이닉스", price: 140000, rate: 0.3 },
	]);
	const [raisedStockList, setRaisedStockList] = useState<StockObject[]>([
		{ id: 32, name: "대원미디어", price: 26000, rate: 85.3 },
		{ id: 44, name: "HMM", price: 56000, rate: 69.4 },
	]);
	const [tenThousandStockList, setTenThousandStockList] = useState<
		StockObject[]
	>([
		{ id: 36, name: "이트론", price: 675, rate: 1.7 },
		{ id: 11, name: "LG화학", price: 900, rate: 3.7 },
	]);

	return (
		<div>
			<div>
				<p>
					Stockit<b>TOP100</b>
				</p>
				<div>
					<div>인기순 탑100</div>
					<div>시총순 탑100</div>
					<div>수익률 탑100</div>
				</div>
				<div>
					<div>
						{popularStockList.map((stock, idx) => (
							<StockList
								idx={idx + 1}
								name={stock.name}
								rate={stock.rate}
							/>
						))}
					</div>
					<div>
						{valuableStockList.map((stock, idx) => (
							<StockList
								idx={idx + 1}
								name={stock.name}
								rate={stock.rate}
							/>
						))}
					</div>
					<div>
						{raisedStockList.map((stock, idx) => (
							<StockList
								idx={idx + 1}
								name={stock.name}
								rate={stock.rate}
							/>
						))}
					</div>
				</div>
				<div>
					<p>10000원으로 살 수 있는 주식</p>
					<div>
						{tenThousandStockList.map((stock, idx) => (
							<StockCard name={stock.name} rate={stock.rate} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
