import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

// components
import RateBox from "../common/RateBox";

// interface
type StockListProps = {
	idx: number;
	name: string;
	rate: number;
};

const StockList: React.FC<StockListProps> = ({ idx, name, rate }) => {
	return (
		<List>
			<p>{idx}위</p>
			<p>{name}</p>
			<RateBox rate={rate} />
		</List>
	);
};

const List = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-top: 1px solid ${COLOR.INPUT_BORDER};
	margin-bottom: 10px;
	min-width: 30vh;
	max-width: 40vh;

	& > p:nth-child(1) {
		width: 20%;
	}

	& > p:nth-child(2) {
		width: 50%;
	}

	& > p:nth-child(3) {
		width: 30%;
	}
`;

export default StockList;
