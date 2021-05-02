import React from "react";
import styled from "@emotion/styled";
// components
import RateBox from "../common/RateBox";

// interface
type StockCardProp = {
	name: string;
	rate: number;
};

const StockCard: React.FC<StockCardProp> = ({ name, rate }) => {
	return (
		<Card>
			<p>{name}</p>
			<RateBox rate={rate} />
		</Card>
	);
};

const Card = styled.div`
	background: white;
	box-shadow: 1px 1px 3px black;
`;

export default StockCard;
