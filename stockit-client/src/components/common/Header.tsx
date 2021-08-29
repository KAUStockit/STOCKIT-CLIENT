import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Container, Logo, HeaderRightBox } from "./HeaderStyle";
import { getCookie, removeCookie } from "../../utils/Cookie";
import { userState } from "../../model/User";
import { useSetRecoilState } from "recoil";

// Components
import ToolTip from "./ToolTip";

const Header: React.FC = () => {
	const history = useHistory();
	const [user, setUser] = useState("");
	const cookie = getCookie("user");
	const setUserRecoilState = useSetRecoilState(userState);

	useEffect(() => {
		// 새로고침 눌러서 초기화된경우 -> 쿠키에 저장된 값이 있으면 쿠키의 값을 토대로 state 재설정
		if (cookie) {
			setUser(cookie.nickname);
			setUserRecoilState(cookie);
		}
	});

	const onLogoClick = (e: React.MouseEvent) => {
		e.preventDefault();
		history.push("/");
	};

	const onPlayGroundClick = (e: React.MouseEvent) => {
		e.preventDefault();
		history.push("/playground");
	};

	const onTradeClick = (e: React.MouseEvent) => {
		e.preventDefault();
		const lastStockId = window.localStorage.getItem("lastStockId");
		history.push(`/${lastStockId}/trade`);
	};

	const onBalanceClick = (e: React.MouseEvent) => {
		e.preventDefault();
		history.push("/balance");
	};

	const onSignUpClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (user.length === 0) {
			history.push("/signup");
		} else {
			history.push("/logout");
		}
	};

	const onSignInClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (user.length === 0) {
			history.push("/signin");
		} else {
			history.push("/mypage");
		}
	};

	const onLogout = () => {
		removeCookie("user");
		window.location.reload();
	};

	const onHoverMyWallet = (e: React.MouseEvent) => {
		document.getElementById("tooltip")!.style.display = "block";
		document.getElementById("tooltip")!.style.top = `${e.pageY}px`;
		document.getElementById("tooltip")!.style.left = `${e.pageX}px`;
	};

	const onLeaveMyWallet = (e: React.MouseEvent) => {
		document.getElementById("tooltip")!.style.display = "none";
	};

	return (
		<Container>
			<Logo>
				<svg
					onClick={onLogoClick}
					xmlns="http://www.w3.org/2000/svg"
					width="107"
					height="32"
					viewBox="0 0 107 32"
					style={{ cursor: "pointer" }}
				>
					<text
						id="Stockit"
						transform="translate(0 25)"
						fill="#fff"
						fontSize="32"
						fontFamily="Helvetica-Bold, Helvetica"
						fontWeight="700"
					>
						<tspan x="0" y="0">
							Stoc
						</tspan>
						<tspan y="0" fill="#00fab6">
							kit
						</tspan>
					</text>
				</svg>
			</Logo>

			<div onMouseMove={onHoverMyWallet} onMouseLeave={onLeaveMyWallet}>
				<a href="#" onClick={onPlayGroundClick}>
					놀이터
				</a>
				<a href="#" onClick={onTradeClick}>
					거래소
				</a>
				<a href="#" onClick={onBalanceClick}>
					내지갑
				</a>
			</div>
			<HeaderRightBox>
				<span>
					{user.length === 0 ? (
						<span>
							<span onClick={onSignInClick}>로그인</span> | <span onClick={onSignUpClick}>회원가입</span>
						</span>
					) : (
						<span>
							<span onClick={onSignInClick}>{user}</span> | <span onClick={onLogout}>로그아웃</span>
						</span>
					)}
				</span>
			</HeaderRightBox>
			<ToolTip content={"asdfasdfasd"} />
		</Container>
	);
};

export default Header;
