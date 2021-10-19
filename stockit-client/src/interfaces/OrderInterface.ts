interface OrderInterface {
	completedCount: number;
	completedPrice: number;
	id: number;
	status: string;
	stockInfo: OrderStockInfoInterface;
	stockOrderCount: number;
	stockOrderPrice: number;
	stockOrderedDate: Date;
	type: string;
}

interface OrderStockInfoInterface {
	stockCode: number;
	stockName: string;
	active: boolean;
	category: null | string | number;
	description: null | string;
	price: number;
}

export default OrderInterface;
