import axios from "axios";
import io, { Socket } from "socket.io-client";

const IP_ADDRESS = "http://localhost";
const PORT = "8080";
var socket: Socket;

const SHA256 = (text: string) => {
	// 비밀번호 보내기 전에 암호화
	return text;
};

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
	logIn: async (data: { id: string; password: string }) => {
		let config = {};
		const result = axios.post(
			`${IP_ADDRESS}:${PORT}`,
			{ ...data, password: SHA256(data.password) },
			config
		);
		console.log(result);
	},
	signUp: async (data: {
		name: string | undefined;
		password: string | undefined;
		email: string | undefined;
		nickname: string | undefined;
	}) => {
		const result = await axios.post("/api/members/new", data);
		return result.data;
	},
	checkValidEmailAddress: async (email: string) => {
		const result = await axios.post(`${IP_ADDRESS}:${PORT}`, { email });
		console.log(result);
	},
};
