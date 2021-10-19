import React from "react";
import styled from "@emotion/styled";

import SearchBox from "./SearchBox";
import { COLOR } from "../../constants/theme";

interface SearchFilterInterface {
	filter: string;
	setFilter: (_value: any) => void;
}

const SearchFilter: React.FC<SearchFilterInterface> = ({ filter, setFilter }) => {
	const onFilterClick = (e: React.MouseEvent) => {
		setFilter(e.currentTarget.innerHTML);
	};

	return (
		<Filter>
			{filters.map((item, idx) => (
				<div
					key={idx}
					style={
						filter === item
							? {
									backgroundColor: COLOR.BLUE,
									color: "white",
							  }
							: {}
					}
					onClick={onFilterClick}
				>
					{item}
				</div>
			))}
			<SearchBox />
		</Filter>
	);
};

const filters = ["목록", "관심", "대기"];

export const Filter = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	border-bottom: 1px solid #dedede;

	& > div {
		height: 35px;
		width: 50px;
		text-align: center;
		line-height: 30px;
		color: #4d4d4d;
		font-size: 14px;
		border-right: 1px solid #dedede;
		cursor: pointer;
	}

	& > div:nth-of-type(4) {
		display: flex;
		justify-content: space-between;
		width: 205px;
	}
`;

export default SearchFilter;
