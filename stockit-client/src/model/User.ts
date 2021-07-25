import { atom, selector } from "recoil";

export const userState = atom({
	key: "userState",
	default: {
		id: 0,
		name: "",
		nickname: "",
		sessionId: "",
		useAdvanced: false,
		currentStockId: [],
	},
});

export const userCurrentStockIdState = selector({
	key: "userCurrentStockIdState",
	get: ({ get }) => {
		return get(userState).currentStockId;
	},
});
