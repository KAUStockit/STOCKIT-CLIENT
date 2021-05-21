import React from "react";
import styled from "@emotion/styled";

// interface
type RankingProp = {};

const Ranking: React.FC<RankingProp> = () => {
	return <Container>랭킹입니다.</Container>;
};

//* css : @emotion/styled
const Container = styled.div`
	height: 30vh;
`;

export default Ranking;
