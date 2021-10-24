import styled from "@emotion/styled";
import { COLOR } from "../constants/theme";

//* css : @emotion/styled
export const Content = styled.div`
	margin: 50px 15% 0 15%;
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
