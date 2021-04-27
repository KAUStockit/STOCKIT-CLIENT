import React from "react";
import { COLOR } from "../constants/theme";
import styled from "@emotion/styled";
import { useVersionContext } from "../App";

const Header: React.FC = () => {
	const { isAdvanced, setIsAdvanced }: any = useVersionContext();

	const onAdvanceClick = (e: any) => {
		e.preventDefault();
		console.log("고급버전 전환");
		setIsAdvanced(!isAdvanced);
	};

	return (
		<Container>
			<a href="/">Stockit</a>
			<div>
				<a href="" onClick={onAdvanceClick}>
					{isAdvanced ? "쉬운버전으로" : "고급버전으로"}
				</a>
			</div>
			<div>
				<a href="/playground">놀이터</a>
				<a href="/trade">거래소</a>
				<a href="/balance">투자내역</a>
			</div>
			<a href="/mypage">마이페이지</a>
		</Container>
	);
};

//* css : @emotion
const Container = styled.div`
	width: 100%;
	height: 69px;
	background: ${COLOR.BLUE};
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Header;
