// 거래소 화면 좌측에 위치한 차트 컴포넌트

import React, { useState } from "react";
import styled from "@emotion/styled";
import { Line } from "react-chartjs-2";
import { LEVEL } from "../../interfaces/MainInterface";
import { COLOR } from "../../constants/theme";

// data
import { CHART_DATA } from "../../utils/DemoData";

// interface
import { ChartProp, ChartDataInterface } from "../../interfaces/TradeInterface";
import ChartPicker from "./ChartPicker";

const Chart: React.FC<ChartProp> = ({ stockId, level }) => {
	// states
	const [filter, setFilter] = useState("1일");

	return (
		<div>
			<ChartGraph className="chart__chart">
				<ChartPicker filter={filter} setFilter={setFilter} />
				<div className="linechart">{configureChart(CHART_DATA, level)}</div>
			</ChartGraph>
		</div>
	);
};

const configureChart = (chartData: ChartDataInterface, level: LEVEL) => {
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
				fill: true,
				backgroundColor: "rgba(72, 149, 255, 0.15)",
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: {
			easing: "easeInOutBack",
		},
		scales: {
			y: {
				gridLines: {
					display: true,
				},
				ticks: {
					display: true,
					stepSize: 1000,
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

	return <Line data={data} options={options} type="line" id="hihi" style={{ height: "360px" }} />;
};

const ChartGraph = styled.div`
	box-shadow: 1px 1px 2px 2px #e2e2e2;
`;

export default React.memo(Chart);
