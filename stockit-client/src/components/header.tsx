import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Trade from "../pages/Trade";
import Balance from "../pages/Balance";
import MyPage from "../pages/MyPage";
import PlayGround from "../pages/PlayGround";
import { COLOR } from "../constants/theme";
import styled from "@emotion/styled";

const Header: React.FC = () => {
	return (
		<Container>
			<div className="header__bar">
				<a href="/">Stockit</a>
				<a href="/trade">거래소</a>
				<a href="/balance">투자내역</a>
				<a href="/mypage">마이페이지</a>
				<a href="/playground">놀이터</a>
			</div>
		</Container>
	);
};

//* css : @emotion
const Container = styled.div`
	width: 100%;
	height: 69px;
	background: ${COLOR.BLUE};
`;

export default Header;
