import axios from "axios";
import { RankItem } from "../interfaces/MyPageInterface";

const IP_ADDRESS = "http://3.37.250.12";
const PORT = "8080";
export const IP_PORT = `${IP_ADDRESS}:${PORT}`;

export const REST_API_LOG = {
	logIn: async (data: { email: string; password: string }) => {
		const result = await axios.post(`${IP_PORT}/api/members/login`, data, {
			headers: { "Content-Type": "application/json" },
		});
		return result.data;
	},

	signUp: async (data: { name: string; password: string; email: string; nickname: string }) => {
		const result = await axios.post(`${IP_PORT}/api/members`, data);
		return result.data;
	},

	checkValidNickName: (nickname: string) => {
		const result = axios.get(`${IP_PORT}/api/members/login/valid-nickname?nickname=${nickname}`);
		return result;
	},

	checkValidEmailAddress: (email: string) => {
		const result = axios.get(`${IP_PORT}/api/members/login/valid-email?email=${email}`);
		return result;
	},
};

export const REST_STOCK = {
	order: (
		token: string,
		id: number,
		stockCode: number,
		data: { stockOrderPrice: number; stockOrderCount: number; orderType: string }
	) => {
		const convertedData = { ...data, orderType: data.orderType === "사기" ? "Buy" : "Sell" };
		const result = axios.post(`${IP_PORT}/api/orders/${id}/${stockCode}/new`, convertedData, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result;
	},

	myOrders: (token: string, memberIdx: number) => {
		const result = axios.get(`${IP_PORT}/api/members/${memberIdx}/orders`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result;
	},

	myStocks: (token: string, memberIdx: number) => {
		const url = `${IP_PORT}/api/members/${memberIdx}/stocks`;
		const result = axios.get(url, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result;
	},

	all: () => {
		const result = axios.get(`${IP_PORT}/api/stocks`);
		return result;
	},

	getStock: (stockCode: number) => {
		const result = axios.get(`${IP_PORT}/api/stocks/${stockCode}`);
		return result;
	},

	getRank: async () => {
		const result: { data: { data: RankItem[] } } = await axios.get(`${IP_PORT}/api/members/rank`);
		return result.data;
	},

	getStocksUnderPrice10000: () => {
		const result = axios.get(`${IP_PORT}/api/stocks?price=10000`);
		return result;
	},
};

export const ADMIN = {
	newStock: (data: { stockName: string; price: number; category: string; description: string }, token: string) => {
		const result = axios.post(`${IP_PORT}/api/stocks/new`, data, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result;
	},
};

export const STOCK_STREAM_SUBSCRIBE = `${IP_PORT}/api/streaming/stockList/subscribe`;
