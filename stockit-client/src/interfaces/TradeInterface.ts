import { LEVEL } from "./MainInterface";

export interface TradeProp {
	match?: any;
	stockId: number;
}

export interface BalanceTabProp {
	myStock: MyStock[];
}

export interface ChartProp {
	stockId: number;
	level: LEVEL;
	id: string;
	userId: number;
}

export type ChartDataInterface = Array<{ seq: number; label: string; price: number }>;

export interface ChatMessageObject {
	// 주고받는 메시지의 타입
	from: string; // 보낸사람이 내 아이디랑 같으면 오른쪽정렬, 아니면 왼쪽정렬
	text: string;
	timestamp: any;
}

export interface TradeModalProp {
	type: string;
	hide: any;
	price: number;
	name: string;
	id: number;
}

export interface ArticleProp {
	stockId: number;
}

export interface MyStock {
	id: number;
	name: string;
	price: number;
	currentPrice: number;
	quantity: number;
}
