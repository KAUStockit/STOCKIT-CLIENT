import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Trade from "../pages/Trade";
import Balance from "../pages/Balance";
import MyPage from "../pages/MyPage";
import PlayGround from "../pages/PlayGround";
import { ReactElement } from "react";

const Header: React.FC = () => {
	return (
		<div>
			<BrowserRouter>
				<div className="header__bar"></div>
				<Link to="/">홈</Link>
				<Link to="/trade">거래소</Link>
				<Link to="/balance">투자내역</Link>
				<Link to="/mypage">마이페이지</Link>
				<Link to="/playground">놀이터</Link>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/trade" component={Trade} />
					<Route exact path="/balance" component={Balance} />
					<Route exact path="/mypage" component={MyPage} />
					<Route exact path="/playground" component={PlayGround} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Header;
