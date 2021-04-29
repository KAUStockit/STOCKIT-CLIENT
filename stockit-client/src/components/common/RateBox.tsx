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
	width: 78px;
	height: 40px;
	color: red;
	border-radius: 5px;
`;

const Lower = styled.div`
	background: ${COLOR.GRAPH_BLUE};
	width: 78px;
	height: 40px;
	color: blue;
	border-radius: 5px;
`;

export default RateBox;
