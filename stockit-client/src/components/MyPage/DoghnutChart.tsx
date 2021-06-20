import React from "react";
import { Chart } from "./BalanceTabStyle";
import { Doughnut } from "react-chartjs-2";

interface ChartDataInterface {
	labels: string[];
	data: {
		datasets: {
			label: string;
			data: number[];
			backgroundColor: string[];
			hoverOffset: number;
		}[];
	};
}

interface DoughnutChartProp {
	chartData: ChartDataInterface;
}

const DoughnutChart: React.FC<DoughnutChartProp> = ({ chartData }) => {
	return (
		<Chart>
			<div>
				<Doughnut
					type="doughnut"
					data={chartData.data}
					options={{ responsive: true, maintainAspectRatio: true }}
				></Doughnut>
			</div>
		</Chart>
	);
};

export default React.memo(DoughnutChart);
