import { atom } from "recoil";

export interface UserInterface {
	id: number;
	balance: number;
	beforeBalance: number;
	createdTime: any;
	earningRate: number;
	email: string;
	name: string;
	nickname: string;
	role: string;
	token: string;
}

export const userState = atom<UserInterface>({
	key: "userState",
	default: {
		id: 0,
		balance: 0,
		beforeBalance: 0,
		createdTime: "",
		earningRate: 0,
		nickname: "",
		email: "",
		name: "",
		role: "",
		token: "",
	},
});
