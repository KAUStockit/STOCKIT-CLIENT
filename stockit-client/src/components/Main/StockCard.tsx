import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router";

import { StockCardProp } from "../../interfaces/MainInterface";
import { COLOR } from "../../constants/theme";

const StockCard: React.FC<StockCardProp> = ({ name, price, id }) => {
	const history = useHistory();

	const onClick = () => {
		history.push(`./${id}/trade`);
	};

	return (
		<Card onClick={onClick}>
			<p>{name}</p>
			<span>{price}원</span>
		</Card>
	);
};

const Card = styled.div`
	background: white;
	box-shadow: 1px 1px 3px 1px #dedede;
	max-width: 40vh;
	height: 20vh;
	display: flex;
	justify-content: space-between;

	& > p {
		margin-left: 15px;
		font-size: 18px;
		font-weight: 500;
	}

	& > span {
		position: relative;
		top: 70%;
		margin-right: 2vh;
		display: block;
		height: 30px;
		padding: 3px 15px;
		border-radius: 10px;
		color: ${COLOR.GRAPH_BLUE};
		background-color: rgba(71, 149, 255, 0.15);
		font-size: 18px;
		font-weight: 500;
	}
`;

export default StockCard;
