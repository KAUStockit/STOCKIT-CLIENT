import React, { useState } from "react";

// components
import MyStockList from "./MyStockList";
import Doughnutchart from "./DoghnutChart";

// pseudo data
import { myStockData, PIE_CHART_DATA } from "../../utils/DemoData";

// theme
import { Container, Total, StockBalance, Pages } from "./BalanceTabStyle";

// interface
import { BalanceTabProp, MyStock } from "../../interfaces/TradeInterface";

const BalanceTab: React.FC<BalanceTabProp> = ({ myStock }) => {
	const [myStocks, setMyStocks] = useState<MyStock[]>(myStockData);
	const [currentPage, setCurrentPage] = useState<number>(1);

	// 페이지 수
	let totalPages = (() => {
		let tmp = [];
		for (let i = 0; i < myStocks.length / 5; i++) {
			tmp.push(i + 1);
		}
		return tmp;
	})();

	// 페이지 이전 버튼 클릭
	const onPrevClick = () => {
		if (currentPage < myStocks.length / 5) {
			setCurrentPage((currentPage) => currentPage - 1);
		}
	};

	// 페이지 숫자 클릭
	const onPageClick = (e: React.MouseEvent) => {
		setCurrentPage(+e.currentTarget.innerHTML);
	};

	// 페이지 다음 버튼 클릭
	const onNextClick = () => {
		if (currentPage > 1) {
			setCurrentPage((currentPage) => currentPage + 1);
		}
	};

	return (
		<Container>
			<div>
				<Doughnutchart chartData={PIE_CHART_DATA} />
				<Total>
					<div>
						<div className="info_gray">보유금액</div>
						<span className="info_black">2,000,000</span>
					</div>
					<div>
						<div className="info_gray">총 매수금액</div>
						<span className="info_black">2,000,000</span>
					</div>
					<div>
						<div className="info_gray">총 평가금액</div>
						<span className="info_black">2,000,000</span>
					</div>
					<div>
						<div className="info_gray">총 보유자산</div>
						<span className="info_black">2,000,000,000</span>
					</div>
					<div>
						<div className="info_gray">총 평가손익</div>
						<span className="info_black">+2,000,000,000</span>
					</div>
					<div>
						<div className="info_gray">총 평가 수익률</div>
						<span className="info_percent">+200%</span>
					</div>
				</Total>
			</div>
			<div>
				<p>보유 주식 목록</p>
			</div>
			<div>
				<p>종목명</p>
				<p>보유수량</p>
				<p>매수평균가</p>
				<p>평가금액</p>
				<p>평가손익</p>
			</div>
			<StockBalance>
				{myStocks.map((stock, idx) => {
					if (idx < currentPage * 5 && idx > (currentPage - 1) * 5) {
						return (
							<MyStockList
								key={idx}
								name={stock.name}
								quantity={stock.quantity}
								price={stock.price}
								evaluation={stock.quantity * stock.currentPrice}
							/>
						);
					}
				})}
				<Pages>
					<div onClick={onPrevClick}>{"<"}</div>
					<div>
						{totalPages.map((item, idx) => {
							console.log(item);
							return (
								<p
									key={idx}
									onClick={onPageClick}
									style={
										item === currentPage
											? { color: "black" }
											: { color: "grey" }
									}
								>
									{item}
								</p>
							);
						})}
					</div>
					<div onClick={onNextClick}>{">"}</div>
				</Pages>
			</StockBalance>
		</Container>
	);
};

export default BalanceTab;

// pseudo data
