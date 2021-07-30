import styled from "@emotion/styled";
// theme
import { COLOR } from "../constants/theme";

export const Container = styled.div`
	margin: 0 10% 0 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Form = styled.div`
	min-width: 40vh;
	max-width: 80vh;
`;

export const EmailForm = styled.div`
	margin-bottom: 20px;
	width: 100%;
	& > div:nth-of-type(1) > p:nth-of-type(1) {
		font-weight: 700;
		font-size: 15px;
	}

	& > div:nth-of-type(1) > p:nth-of-type(2) {
		font-size: 14px;
	}

	& > div {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	& > div > input {
		height: 4vh;
		width: 80%;
		border: 1px solid ${COLOR.INPUT_BORDER};
		border-radius: 5px;
		background-color: white;
		padding-left: 10px;
	}

	& > div > input:focus {
		background-color: white;
		outline: none;
		border: 1px solid ${COLOR.BLUE};
		box-shadow: 1px 1px 3px ${COLOR.INPUT_BORDER};
	}

	& > div > button {
		width: 15%;
		color: white;
		background-color: ${COLOR.GRAPH_BLUE};
		outline: none;
		border: none;
		border-radius: 5px;
		font-weight: 600;
	}

	& > div > button:active {
		background-color: ${COLOR.BLUE};
	}
`;

export const Button = styled.button`
	margin-top: 40px;
	color: white;
	min-width: 40vh;
	max-width: 60vh;
	height: 50px;
	background-color: ${COLOR.GRAPH_BLUE};
	outline: none;
	border: none;
	border-radius: 5px;
	font-size: 14px;
	font-weight: 600;

	&:active {
		background-color: ${COLOR.BLUE};
	}
`;

export const Bottom = styled.div`
	min-width: 40vh;
	max-width: 60vh;

	& > p {
		display: block;
		left: 5px;
		font-size: 14px;
		padding-bottom: 5px;
		border-bottom: 1px solid ${COLOR.INPUT_BORDER};
	}
	& > button {
		min-width: 40vh;
		max-width: 60vh;
		outline: none;
		border: none;
		border-radius: 5px;
		font-size: 14px;
		font-weight: 600;
		height: 50px;
		background-color: #fae523;
	}

	& > button:active {
		background-color: #ffd700;
	}
`;
