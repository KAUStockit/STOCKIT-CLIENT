import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

interface InformationProp {
	name: string;
	category: string;
	info: string;
}

const Information: React.FC<InformationProp> = ({ name, category, info }) => {
	return (
		<Container>
			<Title>
				<img src="/img/kakaogames.png" alt="" />
				<div>{name}</div>
				<p>{category}</p>
			</Title>
			<hr />
			<Content>{info}</Content>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > div {
		width: 95%;
	}
`;

const Title = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 1px solid ${COLOR.BOX_BORDER};
	width: 100%;
	padding-top: 10px;

	& > img {
		width: 30px;
		height: 30px;
		padding: 0px 10px;
	}

	& > div {
		margin-right: 20px;
	}

	& > p {
		font-size: 14px;
	}
`;

const Content = styled.div`
	padding-bottom: 20px;
	font-size: 15px;
`;

export default Information;
