import { useEffect, useState } from "react";

import { STOCK_STREAM_SUBSCRIBE } from "../utils/Networking";
import { ChartDataInterface } from "../interfaces/TradeInterface";
import { Stock } from "../interfaces/MainInterface";
import { CHART_DATA } from "../utils/DemoData";

const useEventSource = (stockId: number, userId: number) => {
	const [chartData, setChartData] = useState<ChartDataInterface>(CHART_DATA);

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
	}, [chartData]);

	return chartData;
};

export default useEventSource;
