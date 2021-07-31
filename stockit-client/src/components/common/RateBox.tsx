import React from "react";
import { Upper, Lower } from "./RateBoxStyle";

type RateBoxProp = {
	rate: number;
};

const RateBox: React.FC<RateBoxProp> = ({ rate }) => {
	return <>{rate > 0 ? <Upper>+{rate}%</Upper> : <Lower>{rate}%</Lower>}</>;
};

export default RateBox;
