import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

export const ChatComponent = styled.div`
	box-shadow: 1px 1px 2px 2px #e2e2e2;
`;
export const Title = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #e2e2e2;
	height: 40px;
	font-size: 14px;

	& > p:nth-of-type(1) {
		margin-left: 20px;
	}

	& > p:nth-of-type(2) {
		margin-right: 20px;
	}
`;
export const ChatContent = styled.div`
	min-height: 100px;
	height: 65%;
`;
export const ChatInput = styled.div`
	height: 60px;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 10px;

	& > input {
		width: 65%;
		height: 40px;
		border: 1px solid #e2e2e2;
		border-radius: 5px;
		margin-left: 15px;
		padding-left: 15px;
		font-size: 15px;

		&:focus {
			outline: none;
		}
	}

	& > button {
		width: 20%;
		height: 40px;
		background-color: ${COLOR.BLUE};
		border: none;
		color: white;
		margin-right: 15px;
		border-radius: 5px;

		&:active {
			background-color: ${COLOR.GRAPH_BLUE};
		}
	}
`;
