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
