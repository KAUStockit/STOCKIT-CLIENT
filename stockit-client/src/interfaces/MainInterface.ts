export type StockObject = {
	id: number;
	name: string;
	price: number;
	rate: number;
};

export type StockListProps = {
	idx: number;
	id: number;
	name: string;
	rate: number;
};

export type StockCardProp = {
	name: string;
	rate: number;
	id: number;
};

export enum LEVEL {
	EASY = "easy",
	HARD = "hard",
}

export interface Stock {
	stockCode: number;
	stockName: string;
	price: number;
	stockCreatedDate: string;
	active: boolean;
	description?: string | null;
	category?: string | null;
	percentage?: number;
}
