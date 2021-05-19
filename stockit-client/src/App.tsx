import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import Trade from "./pages/Trade";
import Balance from "./pages/Balance";
import MyPage from "./pages/MyPage";
import PlayGround from "./pages/PlayGround";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// interface
export enum LEVEL {
	EASY = "easy",
	HARD = "hard",
}

export default function App() {
	const [isAdvanced, setIsAdvanced] = useState(false);
	const [user, setUser] = useState("");

	// didRendered
	// 제일 최근에 봤던 주식 정보가 있으면
	useEffect(() => {
		window.localStorage.setItem(
			"lastStockId",
			window.localStorage.getItem("lastStockId") || "1"
		);
	}, []);

	return (
		<VersionContext.Provider value={{ isAdvanced, setIsAdvanced }}>
			<div className="App" style={{ fontFamily: "Noto Sans KR" }}>
				<Header user={user} />
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/:stockId/trade" component={Trade} />
						<Route exact path="/balance" component={Balance} />
						<Route exact path="/mypage" component={MyPage} />
						<Route
							exact
							path="/playground"
							component={PlayGround}
						/>
						<Route exact path="/signin" component={SignIn} />
						<Route exact path="/signup" component={SignUp} />
					</Switch>
				</BrowserRouter>
				<Footer />
			</div>
		</VersionContext.Provider>
	);
}

type VersionContextType = {
	isAdvanced: boolean;
	setIsAdvanced: (v: boolean) => void;
};

export const VersionContext =
	React.createContext<VersionContextType | undefined>(undefined);

export const useVersionContext = () => useContext(VersionContext);
