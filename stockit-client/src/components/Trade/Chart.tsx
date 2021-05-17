// 거래소 화면 좌측에 위치한 차트 컴포넌트

import React, { useState } from "react";
import styled from "@emotion/styled";
import { Line } from "react-chartjs-2";

// components

// interface
import { LEVEL } from "../../App";
type ChartProp = {
	stockId: number;
	level: LEVEL;
};

const Chart: React.FC<ChartProp> = ({ stockId, level }) => {
	return (
		<div>
			<ChartGraph className="chart__chart">
				<Picker className="chart__picker">
					<div>1일</div>
					<div>1주</div>
					<div>1개월</div>
					<div>3개월</div>
					<div>1년</div>
					<div>5년</div>
				</Picker>
				<div className="linechart">
					{level === LEVEL.EASY ? (
						// 쉬운 버전 차트
						<Line type="line" data={{}} />
					) : (
						// 어려운 버전 차트
						<Line type="line" data={{}} />
					)}
				</div>
			</ChartGraph>
		</div>
	);
};

//* css : @emotion/styled

const ChartGraph = styled.div`
	box-shadow: 1px 1px 2px 2px #e2e2e2;
`;

const Picker = styled.div`
	display: flex;
	justify-content: flex-start;
	border-bottom: 1px solid #dedede;

	& > div {
		border-right: 1px solid #dedede;
		width: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #4d4d4d;
		height: 40px;
		font-size: 15px;
	}
`;

export default Chart;
