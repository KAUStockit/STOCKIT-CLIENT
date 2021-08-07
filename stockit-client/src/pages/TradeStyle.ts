import styled from "@emotion/styled";
import { COLOR } from "../constants/theme";

//* css : @emotion/styled
export const Container = styled.div`
	margin: 0 10% 0 10%;
`;
export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 350px;
	grid-template-rows: 400px 300px;
	column-gap: 30px;
	row-gap: 30px;
`;
export const Title = styled.div`
	display: flex;
	justify-content: space-between;
	width: calc(100% - 380px);
	align-items: center;
	margin: 10px 0px;
	height: 50px;
	width: ${document.getElementsByTagName("canvas")[0]?.style.width};

	& > div:nth-of-type(2) {
		justify-self: end;
	}
`;
export const StockName = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 35%;
	min-width: 300px;
	font-weight: 700;
	font-size: 18px;

	& > * {
		padding-right: 10px;
	}

	& > img {
		width: 30px;
		height: 30px;
	}

	& > span:nth-of-type(2) {
		margin-left: 10px;
		color: ${COLOR.BLUE};
		font-weight: 500;
	}
`;
export const TradeButtons = styled.div`
	width: 150px;
	min-width: 150px;
	display: flex;
	justify-content: space-evenly;

	& > button {
		height: 30px;
		width: 7vh;
		font-weight: 600;
		background-color: white;
		border-radius: 50px;
		border: none;
		box-shadow: 1px 1px 1px 1px #e2e2e2;
		cursor: pointer;
	}

	& > button:nth-of-type(1) {
		color: ${COLOR.GRAPH_RED};
		&:hover {
			color: white;
			background: ${COLOR.GRAPH_RED};
		}
	}

	& > button:nth-of-type(2) {
		color: ${COLOR.GRAPH_BLUE};
		&:hover {
			color: white;
			background: ${COLOR.GRAPH_BLUE};
		}
	}
`;
