import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";
import { useHistory } from "react-router";

// components
import RateBox from "../common/RateBox";

// interface
import { StockListProps } from "../../interfaces/MainInterface";

const StockList: React.FC<StockListProps> = ({ idx, id, name, rate }) => {
	const history = useHistory();

	const onclick = () => {
		history.push(`./${id}/trade`);
	};

	return (
		<List onClick={onclick}>
			<p>{idx}위</p>
			<p>{name}</p>
			<RateBox rate={rate} />
		</List>
	);
};

//* css : @emotion/styled
const List = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-top: 1px solid ${COLOR.INPUT_BORDER};
	margin-bottom: 10px;
	height: 45px;
	min-width: 30vh;
	max-width: 40vh;
	font-size: 15px;

	& > p:nth-of-type(1) {
		width: 20%;
	}

	& > p:nth-of-type(2) {
		width: 50%;
	}

	& > p:nth-of-type(3) {
		width: 30%;
	}
`;

export default StockList;
