import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

type RateBoxProp = {
	rate: number;
};

const RateBox: React.FC<RateBoxProp> = ({ rate }) => {
	return <>{rate > 0 ? <Upper>+{rate}%</Upper> : <Lower>{rate}%</Lower>}</>;
};

//* css : @emotion
const Upper = styled.div`
	background: ${COLOR.GRAPH_RED};
	width: 6.5vh;
	height: 3.5vh;
	color: red;
	border-radius: 5px;
	font-weight: 400;
	font-size: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Lower = styled.div`
	background: ${COLOR.GRAPH_BLUE};
	width: 6.5vh;
	height: 3.5vh;
	color: blue;
	border-radius: 5px;
	font-weight: 400;
	font-size: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default RateBox;
