import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

//* css : @emotion/styled
export const Modal = styled.div`
	background-color: rgba(0, 0, 0, 50%);
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
	backdrop-filter: blur(3px);
`;
export const DoneModalFrame = styled.div`
	background-color: white;
	position: absolute;
	box-shadow: 3px 1px 3px 3px #7c7c7c;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 320px;
	width: 380px;

	& > p:nth-of-type(1) {
		padding-bottom: 0px;
		margin-top: 0px;
		margin-bottom: 0px;
		font-size: 18px;
	}

	& > p:nth-of-type(2) {
		color: #898989;
		margin-bottom: 30px;
	}

	& > button {
		background: ${COLOR.BLUE};
		width: 30%;
	}

	& > button:active {
		background: ${COLOR.GRAPH_BLUE};
	}
`;
export const ModalFrame = styled.div`
	background-color: white;
	position: absolute;
	width: 450px;
	height: 500px;
	box-shadow: 3px 1px 3px 3px #7c7c7c;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > p:nth-of-type(1) {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		font-weight: 600;
		width: 90%;
		padding-top: 10px;
		padding-bottom: 20px;
		border-bottom: 1px solid ${COLOR.BOX_BORDER};
	}

	& > p:nth-of-type(2) {
		padding: 3% 0 3% 0;
		color: ${COLOR.BLUE};
		font-size: 30px;
	}

	& > div:nth-of-type(1) {
		width: 70%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2vh;

		& > input {
			width: 12%;
		}
	}

	& > div:nth-of-type(2) {
		width: 70%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 5vh;
	}

	& > div:nth-of-type(3) {
		width: 70%;
		display: flex;
		justify-content: space-around;

		& > button:nth-of-type(1) {
			background-color: ${COLOR.BUTTON_INACTIVE};
			&:active {
				background: ${COLOR.BOX_BORDER};
			}
		}

		& > button:nth-of-type(2) {
			background-color: ${COLOR.BLUE};

			&:active {
				background: ${COLOR.GRAPH_BLUE};
			}
		}
	}
`;
export const Button = styled.button`
	width: 45%;
	height: 50px;
	outline: none;
	border: none;
	border-radius: 5px;
	color: white;
	font-weight: 500;
`;
