import { LEVEL } from "./MainInterface";

export interface TradeProp {
	match?: any;
	stockId: number;
	stockName: string;
	stockPrice: number;
}

export interface BalanceTabProp {
	myStock: MyStock[];
}

export interface MyStock {
	id: number;
	name: string;
	price: number;
	currentPrice: number;
	quantity: number;
}

export interface ArticleProp {
	stockId: number;
	stockClass: string; // 종목의 분류 (ex. 카카오게임즈 : 게임/엔터테인먼트)
}
export interface ChartProp {
	stockId: number;
	level: LEVEL;
	id: string;
}

export interface ChartDataInterface {
	id: number;
	name: string;
	filter: string;
	data: Array<{ seq: number; label: string; price: number }>;
}

export interface ChatMessageObject {
	// 주고받는 메시지의 타입
	from: string; // 보낸사람이 내 아이디랑 같으면 오른쪽정렬, 아니면 왼쪽정렬
	text: string;
	timestamp: Date;
}

export interface TradeModalProp {
	type: string;
	hide: any;
	price: number;
	name: string;
}