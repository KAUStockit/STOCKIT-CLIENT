import axios from "axios";
import io, { Socket } from "socket.io-client";

const IP_ADDRESS = "http://localhost";
const PORT = "8080";
var socket: Socket;

export const SOCKET = {
	initialize: () => {
		socket = io(`${IP_ADDRESS}:${PORT}`);
		socket.on("connect", () => {
			console.log("on connect");
		});
	},
	open_connection: () => {
		socket = io(`${IP_ADDRESS}:${PORT}`);
	},
	close_connection: () => {
		socket.offAny();
	},
	send: (msgClass: string, data: any) => {
		socket.emit(msgClass, data);
	},
};

export const REST_API_LOG = {
	logIn: async (data: { email: string; password: string }) => {
		const result = await axios.post("/api/members/login", data, { headers: {"Content-Type": "application/json"}});
		return result.data;
	},
	signUp: async (data: { name: string; password: string; email: string; nickname: string }) => {
		const result = await axios.post("/api/members/new", data);
		return result.data;
	},
	checkValidNickName: async (nickname: string) => {
		const result = await axios.post("/api/members/login/validate/nickname", { nickname });
		return result;
	},
	checkValidEmailAddress: async (email: string) => {
		const result = await axios.post("/api/members/login/validate/email", { email });
		return result;
	},
};

export const REST_STOCK = {
	order : async (token: string, memberIdx : number, stockCode: number, data: {stockOrderPrice: number, stockOrderCount: number}) => {
		const result = await axios.post(`api/orders/${memberIdx}/${stockCode}/new`, data, { headers: {"Authorization" : `Bearer ${token}`}});
		return result;
	}
}

export const ADMIN = {
	newStock : async (data : { stockName : string, price: number}, token: string) => {
		const result = await axios.post('/api/stocks/new', data, { headers: {"Authorization" : `Bearer ${token}`}});
		return result;
	}
}
