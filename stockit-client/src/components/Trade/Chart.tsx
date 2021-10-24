import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { Line } from "react-chartjs-2";
import { LEVEL } from "../../interfaces/MainInterface";
import { COLOR } from "../../constants/theme";
import { CHART_DATA } from "../../utils/DemoData";
import { ChartProp, ChartDataInterface } from "../../interfaces/TradeInterface";
import ChartPicker from "./ChartPicker";
import { STOCK_STREAM_SUBSCRIBE } from "../../utils/Networking";
import { Stock } from "../../interfaces/MainInterface";

const Chart = ({ stockId, level, userId }: ChartProp) => {
	const [chartData, setChartData] = useState<ChartDataInterface>(CHART_DATA);
	const [filter, setFilter] = useState("1일");

	useEffect(() => {
		const eventSource = new EventSource(`${STOCK_STREAM_SUBSCRIBE}?userId=${userId}`);

		eventSource.onopen = (e) => {
			console.log(e);
		};

		eventSource.onmessage = (e) => {
			const data: Stock[] = JSON.parse(e.data);
			const currentStockData = data.filter((stock) => stock.stockCode === +stockId)[0];
			if (chartData.length < 10)
				setChartData((data) => [...data, { seq: 123, label: "6/21", price: currentStockData.price }]);
			else
				setChartData((data) => [...data.splice(1), { seq: 123, label: "6/21", price: currentStockData.price }]);
		};

		return () => {
			eventSource.close();
		};
	}, []);

	return (
		<div>
			<ChartGraph className="chart__chart">
				<ChartPicker filter={filter} setFilter={setFilter} />
				<div className="linechart">{configureChart(chartData, level)}</div>
			</ChartGraph>
		</div>
	);
};

const configureChart = (chartData: ChartDataInterface, level: LEVEL) => {
	const data = {
		labels: chartData.map((item) => {
			return item.label;
		}),
		datasets: [
			{
				borderColor: COLOR.GRAPH_BLUE,
				borderWidth: 3,
				hoverBackgroundColor: COLOR.GRAPH_BLUE,
				hoverBorderColor: COLOR.BLUE,
				data: chartData.map((item) => item.price),
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
		animation: false,
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
