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
			<div>
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
			</div>

			<div>
				<a href="/playground">놀이터</a>
				<a href="/trade">거래소</a>
				<a href="/balance">투자내역</a>
			</div>
			<HeaderLeftBox>
				{user === "" ? (
					<div>
						<span>로그인</span>|<span>회원가입</span>
					</div>
				) : (
					<div>
						<span>{user}</span>|<span>내정보</span>
					</div>
				)}
			</HeaderLeftBox>
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
	color: white;

	& > div {
		width: 20%;
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

const HeaderLeftBox = styled.div`
	width: 100px;
	height: 60%;
	background: ${COLOR.GRAPH_BLUE};

	$ > div {
		margin-top: 8px;
	}
`;

export default Header;
