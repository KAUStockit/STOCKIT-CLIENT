import styled from "@emotion/styled";
import { COLOR } from "../constants/theme";

//* css : @emotion/styled
export const Container = styled.div`
	margin: 40px 10% 0 10%;
	display: grid;
	grid-template-columns: 2fr 1fr;
`;
export const LeftMenu = styled.div`
	margin-right: 20px;
	box-shadow: 1px 1px 5px ${COLOR.BOX_BORDER};

	& > div:nth-of-type(1) {
		height: 40px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid ${COLOR.BOX_BORDER};

		& > div {
			padding: 0 15px 0 15px;
			border-right: 1px solid ${COLOR.BOX_BORDER};
			height: 100%;
			display: flex;
			align-items: center;
			cursor: pointer;
		}
	}
`;
