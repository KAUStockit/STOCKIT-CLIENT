import styled from "@emotion/styled";

import React from "react";
import usePagenation from "../../hooks/usePagenation";
import { MyStock } from "../../interfaces/TradeInterface";
import MyStockList from "./MyStockList";

interface BalanceTabPagesInterface {
	myStocks: Array<MyStock>;
}

const BalanceTabPages: React.FC<BalanceTabPagesInterface> = ({ myStocks }) => {
	const { currentPage, totalPages, onPrevClick, onPageClick, onNextClick } = usePagenation(myStocks);
	return (
		<>
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
					return <div key={idx}></div>;
				})}
			</StockBalance>
			<Pages>
				<div onClick={onPrevClick} className="page-button">
					<img src="/assets/pageLeftArrow.png" alt="" />
				</div>
				<div>
					{totalPages.map((item, idx) => {
						return (
							<p
								key={idx}
								onClick={onPageClick}
								style={item === currentPage ? { color: "black" } : { color: "grey" }}
							>
								{item}
							</p>
						);
					})}
				</div>
				<div onClick={onNextClick} className="page-button">
					<img src="/assets/pageRightArrow.png" alt="" />
				</div>
			</Pages>
		</>
	);
};

const StockBalance = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Pages = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	& > div:nth-of-type(2) {
		display: flex;
		& > p {
			cursor: pointer;
			padding: 0 3px 0 5px;
		}
	}

	& > .page-button {
		width: 20px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #e2e2e2;
		margin: 0px 5px;
	}
`;

export default BalanceTabPages;
