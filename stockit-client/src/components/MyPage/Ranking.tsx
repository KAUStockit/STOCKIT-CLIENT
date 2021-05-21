import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

// interface
type RankingProp = {
	name: string;
	rank: number;
};

type RankingItemProp = {
	rank: number;
	name: string;
	value: number;
};

const Ranking: React.FC<RankingProp> = ({ name, rank }) => {
	return (
		<Container>
			<div>
				<div>
					<p>현재</p>
					<br />
					<div>{name}님의 순위는?</div>
				</div>
				<p>{rank}위</p>
			</div>
			<div>
				{rankingData.map((item, idx) => {
					return (
						<RankingItem
							key={idx}
							rank={item.rank}
							name={item.name}
							value={item.value}
						/>
					);
				})}
			</div>
		</Container>
	);
};

const RankingItem: React.FC<RankingItemProp> = ({ rank, name, value }) => {
	return (
		<RankRow>
			<div>{rank}</div>
			<div>{name}</div>
			<div>{value}%</div>
		</RankRow>
	);
};

//* css : @emotion/styled
const Container = styled.div`
	height: 30vh;

	& > div:nth-of-child(1) {
		box-shadow: 1px 3px 3px ${COLOR.BOX_BORDER};
		margin-bottom: 15px;
	}
`;

const RankRow = styled.div`
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export default Ranking;

// pseudo data
const rankingData: RankingItemProp[] = [
	{
		rank: 1,
		name: "문상혁",
		value: 23.3,
	},
	{
		rank: 2,
		name: "김주안",
		value: 10.4,
	},
];
