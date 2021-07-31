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
	logIn: async (data: { email: string; password: string }) => {
		const result = axios.post("/api/member/login", { ...data, password: SHA256(data.password) });
		console.log(result);
	},
	signUp: async (data: { name: string; password: string; email: string; nickname: string }) => {
		const result = await axios.post("/api/members/new", { ...data, password: SHA256(data.password) });
		return result.data;
	},
	checkValidNickName: async (nickname: string) => {
		const result = await axios.post("/api/members/validate/nickname", { nickname });
		console.log(result);
		return result;
	},
	checkValidEmailAddress: async (email: string) => {
		const result = await axios.post("/api/members/validate/email", { email });
		return result;
	},
};
