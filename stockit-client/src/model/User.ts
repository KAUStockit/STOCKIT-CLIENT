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
		// 관심종목: [],
	},
});

export const userCurrentStockIdState = selector({
	key: "userCurrentStockIdState",
	get: ({ get }) => {
		return get(userState).currentStockId;
	},
});
