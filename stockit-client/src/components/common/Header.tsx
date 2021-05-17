import React from "react";
import { COLOR } from "../../constants/theme";
import styled from "@emotion/styled";
import { useVersionContext } from "../../App";

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

	return (
		<Container>
			<Logo>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="107"
					height="32"
					viewBox="0 0 107 32"
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
						<span>로그인</span>|<span>회원가입</span>
					</div>
				) : (
					<div>
						<span>{user}</span>|<span>내정보</span>
					</div>
				)}
			</HeaderRightBox>
		</Container>
	);
};

//* css : @emotion
const Container = styled.div`
	width: 100%;
	height: 69px;
	background: ${COLOR.BLUE};
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	align-
	color: white;

	& > div {
		width: 20%;
		height: 100%;
		display: flex;
		align-items:center;
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
	align-items: baseline;
`;

const HeaderRightBox = styled.div`
	max-width: 150px;
	height: 60% !important;
	background: ${COLOR.GRAPH_BLUE};
	color: white;
	justify-content: space-around;

	$ > div {
		margin-top: 8px;
	}
`;

export default Header;
