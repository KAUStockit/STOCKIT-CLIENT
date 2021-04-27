import React, { useState, useContext } from "react";
import { useVersionContext } from "../App";

function Trade() {
	const { isAdvanced, setIsAdvanced }: any = useVersionContext();
	return (
		<>
			<div>{isAdvanced && "고급버전"}</div>
			<div>
				거래소페이지입니다.
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</div>
		</>
	);
}

export default Trade;
