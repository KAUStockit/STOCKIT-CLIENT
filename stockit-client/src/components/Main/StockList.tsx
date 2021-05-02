import React from "react";
import styled from "@emotion/styled";

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
			<p>{idx}</p>
			<p>{name}</p>
			<RateBox rate={rate} />
		</List>
	);
};

const List = styled.div``;

export default StockList;
