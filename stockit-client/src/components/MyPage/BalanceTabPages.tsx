import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";

import usePagenation from "../../hooks/usePagenation";
import { MyStock } from "../../interfaces/MyPageInterface";
import MyStockList from "./MyStockList";
import { REST_STOCK } from "../../utils/Networking";
import { getCookie } from "../../utils/Cookie";

const BalanceTabPages = () => {
	const [myStocksCurrent, setMyStocksCurrent] = useState<MyStock[]>([]);
	console.log(myStocksCurrent);
	let myStocksBought = useRef<MyStock[] | null>([]);
	const user = getCookie("user");

	useEffect(() => {
		REST_STOCK.myStocks(user.token, user.id).then((result) => {
			console.log(result);
			if (!result) throw new Error("fetching stock list failed");
			myStocksBought.current = result.data.data.first;
			setMyStocksCurrent(result.data.data.second);
		});
	}, []);

	const { currentPage, totalPages, onPrevClick, onPageClick, onNextClick } = usePagenation(myStocksCurrent);
	return (
		<>
			<StockBalance>
				{myStocksCurrent.map((stock, idx) => {
					if (idx < currentPage * 5 && idx >= (currentPage - 1) * 5) {
						return (
							<MyStockList
								key={idx}
								name={stock.stockName}
								quantity={myStocksBought.current![idx].amount}
								price={myStocksBought.current![idx].price}
								evaluation={myStocksBought.current![idx].amount * myStocksBought.current![idx].price}
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
