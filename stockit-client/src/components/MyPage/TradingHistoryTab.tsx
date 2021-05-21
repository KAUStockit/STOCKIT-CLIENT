import React from "react";
import styled from "@emotion/styled";

// interface
type TradingHistoryTabProp = {};

const TradingHistoryTab: React.FC<TradingHistoryTabProp> = () => {
	return <Container>거래내역</Container>;
};

//* css : @emotion/styled
const Container = styled.div`
	& > div {
		width: 100%;
		height: 200px;
		display: flex;
		align-items: center;
	}
`;

export default TradingHistoryTab;
