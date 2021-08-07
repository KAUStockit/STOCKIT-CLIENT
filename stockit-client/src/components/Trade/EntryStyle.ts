import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

export const EntryComponent = styled.div`
	box-shadow: 1px 1px 2px 2px #e2e2e2;
	min-width: 35vh;
`;
export const Filter = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	border-bottom: 1px solid #dedede;

	& > div {
		height: 35px;
		width: 50px;
		text-align: center;
		line-height: 30px;
		color: #4d4d4d;
		font-size: 14px;
		border-right: 1px solid #dedede;
		cursor: pointer;
	}

	& > div:nth-of-type(4) {
		display: flex;
		justify-content: space-between;
		width: 205px;
	}
`;
export const SearchBox = styled.div`
	& > input {
		height: 95%;
		border: none;
		padding-left: 10px;

		&:focus {
			outline: none;
		}
	}

	& > div:nth-of-type(1) {
		width: 50px;
	}
`;
export const ListFilter = styled.div`
	display: grid;
	height: 35px;
	grid-template-columns: 3fr 2fr 5fr 1fr;

	& > div {
		height: 100%;
		width: 100%;
		text-align: center;
		line-height: 35px;
		font-size: 13px;
		border-bottom: 1px solid ${COLOR.INPUT_BORDER};
	}
`;
export const EntryItems = styled.div`
	& > div {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: 3fr 2fr 5fr 1fr;
		height: 40px;
		border-bottom: 1px solid ${COLOR.INPUT_BORDER};

		& > div {
			font-size: 13px;
		}
	}
`;
