import axios from "axios";

const IP_ADDRESS = "http://3.37.250.12";
const PORT = "8080";
// const IP_PORT = `${IP_ADDRESS}:${PORT}`;
const IP_PORT = ``;

export const REST_API_LOG = {
	logIn: async (data: { email: string; password: string }) => {
		const result = await axios.post(`${IP_PORT}/api/members/login`, data, {
			headers: { "Content-Type": "application/json" },
		});
		return result.data;
	},
	signUp: async (data: { name: string; password: string; email: string; nickname: string }) => {
		const result = await axios.post(`${IP_PORT}/api/members/new`, data);
		return result.data;
	},
	checkValidNickName: async (nickname: string) => {
		const result = await axios.get(`${IP_PORT}/api/members/login/validate/nickname?nickname=${nickname}`);
		return result;
	},
	checkValidEmailAddress: async (email: string) => {
		const result = await axios.get(`${IP_PORT}/api/members/login/validate/email?email=${email}`);
		return result;
	},
};

export const REST_STOCK = {
	order: async (
		token: string,
		memberIdx: number,
		stockCode: number,
		data: { stockOrderPrice: number; stockOrderCount: number }
	) => {
		const result = await axios.post(`${IP_PORT}/api/orders/${memberIdx}/${stockCode}/new`, data, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result;
	},
	myOrders: async (token: string, memberIdx: number) => {
		const result = await axios.get(`${IP_PORT}/api/members/${memberIdx}/orders`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result;
	},
	all: async (token: string) => {
		const result = await axios.get(`${IP_PORT}/api/stocks/list`);
		return result;
	},
	getStock: async (token: string, stockCode: number) => {
		const result = await axios.get(`${IP_PORT}/api/stocks/${stockCode}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result;
	},
};

export const ADMIN = {
	newStock: async (data: { stockName: string; price: number }, token: string) => {
		const result = await axios.post(`${IP_PORT}/api/stocks/new`, data, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result;
	},
};
