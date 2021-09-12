import styled from "@emotion/styled";
import { COLOR } from "../constants/theme";

//* css : @emotion/styled
export const Content = styled.div`
	margin: 50px 15% 0 15%;
`;
export const MainCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 20px;
`;
export const MainCard = styled.div`
	width: 20vw;
	min-width: 270px;
	height: 20vh;
	background-color: ${COLOR.GRAPH_BLUE};
	border-radius: 10px;
	margin-right: 20px;
	position: relative;

	& > p {
		margin: 0;
		color: white;
		display: block;
		position: absolute;
		right: 10%;
		bottom: 10%;
		font-weight: 800;
		font-size: 20px;
	}
`;
export const MainRank = styled.div`
	margin-top: 30px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	& > div {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 20px;

		& > div {
			width: 20vw;
			min-width: 270px;
			margin-right: 10px;
			padding-left: 10px;
		}
	}
`;
export const MainBottom = styled.div`
	margin-top: 50px;

	& > h3 {
		font-weight: 700;
		font-size: 18px;
	}

	& > div {
		display: flex;
		justify-content: flex-start;
		width: 68vw;
	}

	& > div > div {
		margin-right: 20px;
		width: 20vw;
	}
`;
export const Circle = styled.div<{ color: string }>`
	background: ${(props) => props.color};
	width: 50px;
	height: 50px;
	border-radius: 40px;
	margin-left: 10px;
	margin-top: 10px;

	display: flex;
	justify-content: center;
	align-items: center;

	& > img {
		width: 30px;
		height: 30px;
	}
`;
