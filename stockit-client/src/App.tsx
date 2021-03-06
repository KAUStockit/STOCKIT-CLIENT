import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";

// components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import Trade from "./pages/Trade";
import MyPage from "./pages/Balance";
import PlayGround from "./pages/PlayGround";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

export default function App() {
	// didRendered
	// 제일 최근에 봤던 주식 정보가 있으면
	useEffect(() => {
		window.localStorage.setItem("lastStockId", window.localStorage.getItem("lastStockId") || "1");
	}, []);

	return (
		<CookiesProvider>
			<RecoilRoot>
				<div className="App" style={{ fontFamily: "Noto Sans KR" }}>
					<BrowserRouter>
						<Header />
						<Switch>
							<Route exact path="/" component={Main} />
							<Route path="/:stockId/trade" component={Trade} />
							<Route exact path="/balance" component={MyPage} />
							<Route exact path="/playground" component={PlayGround} />
							<Route exact path="/signin" component={SignIn} />
							<Route exact path="/signup" component={SignUp} />
							<Route component={NotFound} />
						</Switch>
					</BrowserRouter>
					<Footer />
				</div>
			</RecoilRoot>
		</CookiesProvider>
	);
}
