import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
	const [isAdvanced, setIsAdvanced] = useState<boolean>(false);

	return (
		<VersionContext.Provider value={{ isAdvanced, setIsAdvanced }}>
			<div className="App">
				<Header />
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
