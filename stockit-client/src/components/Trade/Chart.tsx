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
			<div className="chart__chart">
				<div className="chart__picker">
					<div>1일</div>
					<div>1주</div>
					<div>1개월</div>
					<div>3개월</div>
					<div>1년</div>
					<div>5년</div>
				</div>
				<div className="linechart">
					{level === LEVEL.EASY ? (
						// 쉬운 버전 차트
						<Line type="line" data={{}} />
					) : (
						// 어려운 버전 차트
						<Line type="line" data={{}} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Chart;
