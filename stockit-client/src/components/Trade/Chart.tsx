// 거래소 화면 좌측에 위치한 차트 컴포넌트

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Line, defaults } from "react-chartjs-2";
import { LEVEL } from "../../App";
import { COLOR } from "../../constants/theme";

// components

// data
import { chartData } from "./ChartDemo";

// interface
type ChartProp = {
	stockId: number;
	level: LEVEL;
};

interface ChartDataInterface {
	id: number;
	name: string;
	filter: string;
	data: Array<{ seq: number; label: string; price: number }>;
}

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
					{
						level === LEVEL.EASY
							? configureChart(chartData) // 쉬운 버전 차트
							: configureChart(chartData) // 어려운 버전 차트
					}
				</div>
			</ChartGraph>
		</div>
	);
};

const configureChart = (chartData: ChartDataInterface) => {
	const data = {
		labels: chartData.data.map((item) => {
			return item.label;
		}),
		datasets: [
			{
				borderColor: COLOR.GRAPH_BLUE,
				borderWidth: 3,
				hoverBackgroundColor: COLOR.GRAPH_BLUE,
				hoverBorderColor: COLOR.BLUE,
				data: chartData.data.map((item) => item.price),
				pointBackgroundColor: "rgba(0, 0, 0, 0)",
				pointBorderColor: "rgba(0, 0, 0, 0)",
				tension: 0.2,
				fill: "start",
				backgroundColor: "rgba(72, 149, 255, 0.15)",
			},
		],
	};

	const options = {
		animation: {
			easing: "easeInOutBack",
		},
		scales: {
			y: {
				gridLines: {
					display: false,
				},
				ticks: {
					beginAtZero: true,
					display: true,
				},
			},

			x: {
				title: {
					display: false,
					align: "end",
				},
				gridLines: { display: false },
				ticks: { display: true },
			},
		},
		layout: {},
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	return (
		<Line
			data={data}
			// width={300}
			// height={200}
			options={options}
			type="line"
		/>
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
