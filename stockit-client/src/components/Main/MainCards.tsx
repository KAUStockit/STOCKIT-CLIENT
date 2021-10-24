import React from "react";
import styled from "@emotion/styled";

import { COLOR } from "../../constants/theme";

const MainCards = ({ setSelectedCard }: { setSelectedCard: (_value: any) => void }) => {
	const onMouseMoveMainCards = (e: React.MouseEvent) => {
		const tooltip = document.getElementById("tooltip");
		tooltip!.style.display = "block";
		tooltip!.style.top = `${e.pageY}px`;
		tooltip!.style.left = `${e.pageX}px`;
		tooltip!.innerText = e.currentTarget.getElementsByTagName("p")[0].innerText;
	};

	const onMouseLeave = (e: React.MouseEvent) => {
		document.getElementById("tooltip")!.style.display = "none";
	};

	const onCardClick = (e: React.MouseEvent) => {
		let cardId = e.currentTarget.id;
		setSelectedCard(() => Number(cardId));
	};

	return (
		<Container onMouseLeave={onMouseLeave}>
			<MainCard onClick={onCardClick} id="0" onMouseMove={onMouseMoveMainCards}>
				<Circle color={"#4076EF"}>
					<img src="/img/card-first.png" alt="" width="100px" height="100px" />
				</Circle>
				<p>인기순 탑100</p>
			</MainCard>
			<MainCard
				onClick={onCardClick}
				style={{ backgroundColor: "#53E8C0" }}
				id="1"
				onMouseMove={onMouseMoveMainCards}
			>
				<Circle color={"#3BD1A9"}>
					<img src="/img/card-second.png" alt="" width="100px" height="100px" />
				</Circle>
				<p>시총순 탑100</p>
			</MainCard>
			<MainCard
				onClick={onCardClick}
				style={{ backgroundColor: "#6C45EF" }}
				id="2"
				onMouseMove={onMouseMoveMainCards}
			>
				<Circle color={"#5229D8"}>
					<img src="/img/card-third.png" alt="" width="100px" height="100px" />
				</Circle>
				<p>수익률 탑100</p>
			</MainCard>
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 20px;
`;
const MainCard = styled.div`
	width: 20vw;
	min-width: 270px;
	height: 20vh;
	background-color: ${COLOR.GRAPH_BLUE};
	border-radius: 10px;
	margin-right: 20px;
	position: relative;

	& > p {
		margin: 0;
		color: white;
		display: block;
		position: absolute;
		right: 10%;
		bottom: 10%;
		font-weight: 800;
		font-size: 20px;
	}
`;

export const Circle = styled.div<{ color: string }>`
	background: ${(props) => props.color};
	width: 50px;
	height: 50px;
	border-radius: 40px;
	margin-left: 10px;
	margin-top: 10px;

	display: flex;
	justify-content: center;
	align-items: center;

	& > img {
		width: 30px;
		height: 30px;
	}
`;

export default MainCards;
