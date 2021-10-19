import React from "react";
import styled from "@emotion/styled";

import { COLOR } from "../../constants/theme";
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

export const Chart = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-right: 1px solid ${COLOR.BOX_BORDER};
	margin: 10px 10px 10px 10px;
	padding: 0 30px 0 10px;

	& > div:nth-of-type(1) {
		width: 100%;
	}
`;

export default React.memo(DoughnutChart);
