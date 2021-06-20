import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

// interface
import { RankingProp, RankingItemProp } from "../../interfaces/MyPageInterface";

const Ranking: React.FC<RankingProp> = ({ name, rank }) => {
	return (
		<Container>
			<CurrentRanking>
				<div>
					<p>현재</p>
					<div>
						<b>{name}</b>님의 순위는?
					</div>
				</div>
				<p>{rank}위</p>
			</CurrentRanking>
			<RankTable>
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
			</RankTable>
		</Container>
	);
};

const RankingItem: React.FC<RankingItemProp> = ({ rank, name, value }) => {
	return (
		<RankRow>
			<div>{rank}위</div>
			<div>{name}</div>
			<div>{value}%</div>
		</RankRow>
	);
};

//* css : @emotion/styled
const Container = styled.div`
	height: 30vh;
`;

const CurrentRanking = styled.div`
	box-shadow: 1px 1px 3px ${COLOR.BOX_BORDER};
	display: flex;
	padding: 15px 0px;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 30px;

	* > p {
		margin: 0;
	}

	& > p {
		font-size: 18px;
		font-weight: 500;
	}
`;

const RankTable = styled.div`
	box-shadow: 1px 1px 5px ${COLOR.BOX_BORDER};
`;

const RankRow = styled.div`
	display: grid;
	padding: 20px 20px;
	grid-template-columns: 1fr 4fr 2fr;
	justify-items: center;
	align-items: center;

	font-size: 14px;
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
	{
		rank: 3,
		name: "박수현",
		value: 10.2,
	},
	{
		rank: 4,
		name: "권태형",
		value: -0.4,
	},
	{
		rank: 5,
		name: "최재혁",
		value: -6.7,
	},
	{
		rank: 6,
		name: "문규진",
		value: -99.9,
	},
];
