import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

//* css : @emotion/styled
export const Container = styled.div`
	border: 1px solid ${COLOR.BOX_BORDER};

	& > div:nth-of-type(1) {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: row;
		border-bottom: 1px solid ${COLOR.BOX_BORDER};
	}

	& > div:nth-of-type(2) {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: row;
		height: 40px;

		& > p {
			font-size: 15px;
			padding-left: 20px;
		}
	}

	& > div:nth-of-type(3) {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		background-color: ${COLOR.DIVIDER};
		height: 30px;
		font-size: 14px;

		& > p {
			display: block;
			padding-left: 20px;
			padding-right: 20px;
		}
	}
`;

export const DoughnutChart = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-right: 1px solid ${COLOR.BOX_BORDER};
	margin: 10px 10px 10px 10px;
	padding: 0 30px 0 10px;

	& > div:nth-of-type(1) {
		width: 100%;
	}
`;

export const Total = styled.div`
	width: 60%;
	display: grid;
	padding-left: 30px;
	padding-right: 30px;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 30px;
	grid-row-gap: 30px;

	& > div > div.info_gray {
		color: #848484;
		margin-bottom: 5px;
	}
	& > div > span.info_black {
		color: "black";
	}
	& > div > span.info_percent {
		color: ${COLOR.BLUE};
	}
`;

export const StockBalance = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Pages = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	& > div:nth-of-type(2) {
		display: flex;
		& > p {
			cursor: pointer;
			padding: 0 3px 0 5px;
		}
	}
`;
