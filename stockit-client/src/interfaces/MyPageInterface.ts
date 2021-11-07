export interface RankItem {
	earningRate: number;
	email: string;
	name: string;
	nickname: string;
}

export interface MyStocks {
	data: {
		first: Array<MyStock>;
		second: Array<MyStock>;
	};
}

export interface MyStock {
	amount: number;
	price: number;
	stockCode: number;
	stockName: string;
}
