import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import styled from "@emotion/styled";

import { COLOR } from "../../constants/theme";
import { getCookie } from "../../utils/Cookie";
import { userState } from "../../model/User";
import ToolTip from "./ToolTip";
import useHeaderNavigation from "../../hooks/useHeaderNaviation";
import HeaderRightButton from "./HeaderRightButton";
import Logo from "./Logo";

const Header: React.FC = () => {
	const [user, setUser] = useState("");
	const { onSignInClick, onSignUpClick, onBalanceClick, onTradeClick, onPlayGroundClick, onLogoClick } =
		useHeaderNavigation(user);
	const cookie = getCookie("user");
	const setUserRecoilState = useSetRecoilState(userState);

	useEffect(() => {
		// 새로고침 눌러서 초기화된경우 -> 쿠키에 저장된 값이 있으면 쿠키의 값을 토대로 state 재설정
		if (cookie) {
			setUser(cookie.nickname);
			setUserRecoilState(cookie);
		}
	}, []);

	const onMouseMoveMyWallet = (e: React.MouseEvent) => {
		const tooltip = document.getElementById("tooltip");
		tooltip!.style.top = `${e.pageY}px`;
		tooltip!.style.left = `${e.pageX}px`;
		tooltip!.style.display = "block";
		tooltip!.innerText = e.currentTarget.innerHTML;
	};

	const onLeaveMyWallet = (e: React.MouseEvent) => {
		document.getElementById("tooltip")!.style.display = "none";
	};

	return (
		<Container>
			<Logo logoClickHandler={onLogoClick} />
			<div onMouseLeave={onLeaveMyWallet}>
				<a href="#" onClick={onPlayGroundClick} onMouseMove={onMouseMoveMyWallet}>
					놀이터
				</a>
				<a href="#" onClick={onTradeClick} onMouseMove={onMouseMoveMyWallet}>
					거래소
				</a>
				<a href="#" onClick={onBalanceClick} onMouseMove={onMouseMoveMyWallet}>
					내지갑
				</a>
			</div>
			<HeaderRightButton user={user} signInHandler={onSignInClick} signUpHandler={onSignUpClick} />
			<ToolTip content={"asdfasdfasd"} />
		</Container>
	);
};

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

export default Header;
