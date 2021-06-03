import React from "react";
import styled from "@emotion/styled";

/*
    동시성 비동기 렌더링 처리를 위한 컴포넌트
 */

export default function Spinner() {
	return <Container>Now Loading...</Container>;
}

const Container = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 50%);
`;
