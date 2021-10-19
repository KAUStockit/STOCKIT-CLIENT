import React from "react";
import styled from "@emotion/styled";

import { COLOR } from "../../constants/theme";
import { removeCookie } from "../../utils/Cookie";

interface HeaderRightButtonInterface {
	user: string;
	signInHandler: (e: React.MouseEvent) => void;
	signUpHandler: (e: React.MouseEvent) => void;
}

const HeaderRightButton: React.FC<HeaderRightButtonInterface> = ({ user, signInHandler, signUpHandler }) => {
	const onLogout = () => {
		removeCookie("user");
		window.location.reload();
	};

	return (
		<HeaderRightBox>
			<span>
				{user.length === 0 ? (
					<span>
						<span onClick={signInHandler}>로그인</span> | <span onClick={signUpHandler}>회원가입</span>
					</span>
				) : (
					<span>
						<span>{user}</span> | <span onClick={onLogout}>로그아웃</span>
					</span>
				)}
			</span>
		</HeaderRightBox>
	);
};

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

export default HeaderRightButton;
