import React, { useState } from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

// components
import MyStockList from "./MyStockList";

// interface
type BalanceTabProp = {};

type Stock = {
	id: number;
	name: string;
	price: number;
	currentPrice: number;
	quantity: number;
};

const BalanceTab: React.FC<BalanceTabProp> = () => {
	const [myStocks, setMyStocks] = useState<Stock[]>(data);
	const [currentPage, setCurrentPage] = useState<number>(1);

	// 페이지 수
	let totalPages = (() => {
		let tmp = [];
		for (let i = 0; i < data.length / 5; i++) {
			tmp.push(i + 1);
		}
		return tmp;
	})();

	// 페이지 이전 버튼 클릭
	const onPrevClick = () => {
		if (currentPage < myStocks.length / 5) {
			setCurrentPage((currentPage) => currentPage + 1);
		}
	};

	// 페이지 숫자 클릭
	const onPageClick = (e: React.MouseEvent) => {
		setCurrentPage(+e.currentTarget.innerHTML);
	};

	// 페이지 다음 버튼 클릭
	const onNextClick = () => {
		if (currentPage > 1) {
			setCurrentPage((currentPage) => currentPage - 1);
		}
	};

	return (
		<Container>
			<div>
				<PieChart>자본구성 파이차트</PieChart>
				<Total>자산 상세 내용</Total>
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
								<p key={idx} onClick={onPageClick}>
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

//* css : @emotion/styled
const Container = styled.div`
	border: 1px solid ${COLOR.BOX_BORDER};

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
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		background-color: ${COLOR.DIVIDER};
		height: 30px;
		font-size: 14px;

		& > p {
			display: block;
			padding-left: 20px;
			padding-right: 20px;
		}
	}
`;

const PieChart = styled.div`
	width: 50%;
`;

const Total = styled.div`
	width: 50%;
`;

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
`;

export default BalanceTab;

// pseudo data
const data: Stock[] = [
	{
		id: 1,
		name: "카카오게임즈",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "HMM",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "대한항공",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "원익IPS",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "삼성전자",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "SK바이오사이언스",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "한화투자증권우",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "상보",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "동국제강",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "셀트리온",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "LG",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "남양유업",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "카카오",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "하이브",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "NE능률",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "대원미디어",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "이수앱지스",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "SK하이닉스",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "한화에어로스페이스",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "아시아나항공",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "만도",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "신세계",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "어보브반도체",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
];
