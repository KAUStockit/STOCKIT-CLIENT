import React from "react";
import styled from "@emotion/styled";

type RateBoxProp = {
	rate: number;
};

const RateBox: React.FC<RateBoxProp> = ({ rate }) => {
	return <>{rate > 0 ? <Upper>+{rate}%</Upper> : <Lower>{rate}%</Lower>}</>;
};

export const Upper = styled.div`
	background: rgba(253, 104, 104, 0.15);
	width: 6.5vh;
	height: 3.5vh;
	color: #fd6868;
	border-radius: 5px;
	font-weight: 400;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Lower = styled.div`
	background: rgba(71, 149, 255, 0.15);
	width: 6.5vh;
	height: 3.5vh;
	color: #4895ff;
	border-radius: 5px;
	font-weight: 400;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default RateBox;
