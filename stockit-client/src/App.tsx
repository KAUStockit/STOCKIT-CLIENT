import "./App.css";
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

export default function App() {
	const [isAdvanced, setIsAdvanced] = useState(false);
	const [user, setUser] = useState("");

	return (
		<VersionContext.Provider value={{ isAdvanced, setIsAdvanced }}>
			<div className="App">
				<Header user={user} />
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/trade" component={Trade} />
						<Route exact path="/balance" component={Balance} />
						<Route exact path="/mypage" component={MyPage} />
						<Route
							exact
							path="/playground"
							component={PlayGround}
						/>
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

export const VersionContext = React.createContext<
	VersionContextType | undefined
>(undefined);

export const useVersionContext = () => useContext(VersionContext);
