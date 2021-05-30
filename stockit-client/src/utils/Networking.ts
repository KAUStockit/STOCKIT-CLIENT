import axios from "axios";
import io, { Socket } from "socket.io-client";

const IP_ADDRESS = "";
const PORT = "";
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

export const REST = {
	logIn: (data: { id: string; password: string }) => {
		let config = {};
		axios
			.post(
				`${IP_ADDRESS}:${PORT}`,
				{ ...data, password: SHA256(data.password) },
				config
			)
			.then((res) => {
				console.log(res);
				// 로그인 데이터 관련해서 UserContext 세팅해야 함!
				return true;
			})
			.catch((err) => {
				console.log(err);
				return false;
			});
	},
	signUp: (data: { id: string; password: string; email: string }) => {
		let config = {};
		axios
			.post(
				`${IP_ADDRESS}:${PORT}`,
				{ ...data, password: SHA256(data.password) },
				config
			)
			.then((res) => {
				console.log(res);
				return true;
			})
			.catch((err) => {
				console.log(err);
				return false;
			});
	},
	checkValidEmailAddress: (email: string) => {
		axios
			.post(`${IP_ADDRESS}:${PORT}`, { email })
			.then((res) => {
				console.log(res);
				return true;
			})
			.catch((err) => {
				console.log(err);
				return false;
			});
	},
};
