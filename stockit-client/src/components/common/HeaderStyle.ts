import { COLOR } from "../../constants/theme";
import styled from "@emotion/styled";

//* css : @emotion/styled
export const Container = styled.div`
	width: 100vw;
	height: 69px;
	background: ${COLOR.BLUE};
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	color: white;

	& > span {
		cursor: pointer;
	}

	& > div:nth-of-type(2) {
		width: 20%;
		min-width: 300px;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	& > div > a {
		all: unset;
		color: white;
		cursor: pointer;
		padding-left: 5%;
	}
	& > div > a:hover {
	}
`;
export const Logo = styled.div`
	display: flex;
	align-items: center;
	width: 40vw;

	$ > a {
		width: 150px;
	}
`;
export const HeaderRightBox = styled.div`
	display: flex;
	align-items: center;
	height: 60% !important;
	background: ${COLOR.GRAPH_BLUE};
	border-radius: 7px;
	color: white;
	justify-content: space-around;

	& > span > span {
		cursor: pointer;
		padding-left: 10px;
		padding-right: 10px;
	}
`;
