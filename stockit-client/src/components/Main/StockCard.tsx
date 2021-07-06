import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router";

// components
import RateBox from "../common/RateBox";

// interface
import { StockCardProp } from "../../interfaces/MainInterface";

const StockCard: React.FC<StockCardProp> = ({ name, rate, id }) => {
	const history = useHistory();

	// functions
	const onClick = () => {
		history.push(`./${id}/trade`);
	};

	return (
		<Card onClick={onClick}>
			<p>{name}</p>
			<RateBox rate={rate} />
		</Card>
	);
};

const Card = styled.div`
	background: white;
	box-shadow: 1px 1px 3px 1px #dedede;
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
