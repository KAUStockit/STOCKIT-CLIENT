export const MAINPAGE_RANKLIST = [
	[{ id: 123, name: "대한항공", price: 999, rate: 3 }],
	[{ id: 124, name: "카카오게임즈", price: 1050, rate: 13 }],
	[{ id: 32, name: "대원미디어", price: 26000, rate: 85.3 }],
];

export const MAINPAGE_PENNY = [
	{ id: 36, name: "이트론", price: 675, rate: 1.7 },
	{ id: 11, name: "LG화학", price: 900, rate: 3.7 },
	{ id: 36, name: "이트론", price: 675, rate: 1.7 },
	{ id: 11, name: "LG화학", price: 900, rate: 3.7 },
];

export const CHART_DATA = [
	{
		seq: 1,
		label: "6/1",
		price: 20000,
	},
	{
		seq: 2,
		label: "6/2",
		price: 19500,
	},
	{
		seq: 3,
		label: "6/3",
		price: 19700,
	},
	{
		seq: 4,
		label: "6/4",
		price: 20100,
	},
	{
		seq: 5,
		label: "6/5",
		price: 20450,
	},
	{
		seq: 6,
		label: "6/6",
		price: 20250,
	},
	{
		seq: 7,
		label: "6/7",
		price: 20800,
	},
	{
		seq: 8,
		label: "6/8",
		price: 20400,
	},
	{
		seq: 9,
		label: "6/9",
		price: 20500,
	},
	{
		seq: 10,
		label: "6/10",
		price: 20800,
	},
	{
		seq: 11,
		label: "6/11",
		price: 20900,
	},
	{
		seq: 12,
		label: "6/12",
		price: 21300,
	},
	{
		seq: 13,
		label: "6/13",
		price: 21800,
	},
	{
		seq: 14,
		label: "6/14",
		price: 22150,
	},
	{
		seq: 15,
		label: "6/15",
		price: 22600,
	},
	{
		seq: 16,
		label: "6/16",
		price: 22900,
	},
	{
		seq: 17,
		label: "6/17",
		price: 22850,
	},
	{
		seq: 18,
		label: "6/18",
		price: 22600,
	},
	{
		seq: 19,
		label: "6/19",
		price: 23000,
	},
	{
		seq: 20,
		label: "6/20",
		price: 23350,
	},
];

type Stock = {
	id: number;
	name: string;
	price: number;
	currentPrice: number;
	quantity: number;
};

export const myStockData: Stock[] = [
	{
		id: 1,
		name: "카카오게임즈",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "HMM",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "대한항공",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "원익IPS",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "삼성전자",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "SK바이오사이언스",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "한화투자증권우",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "상보",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "동국제강",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "셀트리온",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "LG",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "남양유업",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "카카오",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "하이브",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "NE능률",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "대원미디어",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "이수앱지스",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "SK하이닉스",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "한화에어로스페이스",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "아시아나항공",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "만도",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "신세계",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
	{
		id: 1,
		name: "어보브반도체",
		price: 10000,
		currentPrice: 14000,
		quantity: 150,
	},
];

export const PIE_CHART_DATA = {
	labels: ["Red", "Blue", "Yellow"],
	data: {
		datasets: [
			{
				label: "My First Dataset",
				data: [300, 50, 100],
				backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
				hoverOffset: 4,
			},
		],
	},
};

export const UserData = {
	userList: [
		{
			id: 1,
			email: "imnotmoon@gmail.com",
			password: "maupas",
			nickname: "상혁아님",
		},
	],
	select: (email: string, password: string) => {
		for (const user of UserData.userList) {
			if (user.email === email && user.password === password) {
				return true;
			}
		}
		return false;
	},
	join: (email: string, password: string, nickname: string) => {
		const id = Math.max(...UserData.userList.map((user) => user.id));
		UserData.userList.push({ id, email, password, nickname });
		return true;
	},
	resign: (id: number) => {
		UserData.userList.forEach((user, idx) => {
			if (user.id === id) UserData.userList.splice(idx, 1);
		});
	},
	getAll: () => UserData.userList,
};
