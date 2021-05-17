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
	box-shadow: 1px 1px 3px #dedede;
	min-width: 30vh;
	max-width: 40vh;
	height: 20vh;
	display: flex;
	justify-content: space-between;

	& > p {
		margin-left: 15px;
		font-size: 18px;
		font-weight: 500;
	}

	& > div {
		position: relative;
		top: 70%;
		margin-right: 2vh;
	}
`;

export default StockCard;
