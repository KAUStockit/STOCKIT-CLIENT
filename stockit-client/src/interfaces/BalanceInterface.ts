export interface MyPageProp {}

export interface MyStockListProp {
	icon?: string;
	name: string;
	quantity: number;
	price: number;
	evaluation: number;
}

export interface RankingProp {
	name: string;
	rank: number;
}

export interface RankingItemProp {
	rank: number;
	name: string;
	value: number;
}

export interface TradingHistoryTabProp {}
