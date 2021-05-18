import React from "react";
import { COLOR } from "../../constants/theme";
import styled from "@emotion/styled";
import { useVersionContext } from "../../App";

// interface
type HeaderProp = {
	user: string;
};

const Header: React.FC<HeaderProp> = ({ user }) => {
	const { isAdvanced, setIsAdvanced }: any = useVersionContext();

	const onAdvanceClick = (e: React.MouseEvent) => {
		e.preventDefault();
		console.log("고급버전 전환");
		setIsAdvanced(!isAdvanced);
	};

	const onLogoClick = (e: React.MouseEvent) => {
		e.preventDefault();
		window.location.href = "/";
	};

	const onSignUpClick = (e: React.MouseEvent) => {
		e.preventDefault();
		window.location.href = "/signup";
	};

	const onSignInClick = (e: React.MouseEvent) => {
		e.preventDefault();
		window.location.href = "/signin";
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
				<a href="" onClick={onAdvanceClick}>
					{isAdvanced ? "쉬운버전으로" : "고급버전으로"}
				</a>
			</Logo>

			<div>
				<a href="/playground">놀이터</a>
				<a href="/trade">거래소</a>
				<a href="/balance">투자내역</a>
			</div>
			<HeaderRightBox>
				{user === "" ? (
					<div>
						<span onClick={onSignInClick}>로그인</span> |{" "}
						<span onClick={onSignUpClick}>회원가입</span>
					</div>
				) : (
					<div>
						<span>{user}</span> | <span>내정보</span>
					</div>
				)}
			</HeaderRightBox>
		</Container>
	);
};

//* css : @emotion/styled

const Container = styled.div`
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

const Logo = styled.div`
	display: flex;
	align-items: center;
	width: 40vw;

	$ > a {
		width: 150px;
	}
`;

const HeaderRightBox = styled.div`
	width: 150px;
	display: flex;
	align-items: center;
	height: 60% !important;
	background: ${COLOR.GRAPH_BLUE};
	color: white;
	justify-content: space-around;

	& > div > span {
		cursor: pointer;
	}
`;

export default Header;
