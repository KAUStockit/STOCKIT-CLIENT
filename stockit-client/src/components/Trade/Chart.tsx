// 거래소 화면 좌측에 위치한 차트 컴포넌트

import React, { useState } from "react";
import styled from "@emotion/styled";
import { Line } from "react-chartjs-2";

// components

// interface
import { LEVEL } from "../../App";
import { COLOR } from "../../constants/theme";
type ChartProp = {
	stockId: number;
	level: LEVEL;
};

const filters = ["1일", "1주", "1개월", "3개월", "1년", "3년"];

const Chart: React.FC<ChartProp> = ({ stockId, level }) => {
	// states
	const [filter, setFilter] = useState("1일");

	const onFilterClick = (e: React.MouseEvent) => {
		setFilter(e.currentTarget.innerHTML);
	};

	return (
		<div>
			<ChartGraph className="chart__chart">
				<Picker className="chart__picker">
					{filters.map((item, idx) => (
						<div
							key={idx}
							onClick={onFilterClick}
							style={
								item === filter
									? {
											backgroundColor: COLOR.BLUE,
											color: "white",
									  }
									: {}
							}
						>
							{item}
						</div>
					))}
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
		cursor: pointer;
	}
`;

export default Chart;
