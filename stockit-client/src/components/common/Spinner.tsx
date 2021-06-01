import React from "react";
import styled from "@emotion/styled";

export default function Spinner() {
	return <div>Now Loading...</div>;
}

const Container = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 50%);
`;
