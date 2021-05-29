// 거래소 화면 우측에 있는 검색, 관심, 미체결 현황 확인을 위한 컴포넌트

import styled from "@emotion/styled";
import React, { useState } from "react";
import { COLOR } from "../../constants/theme";

// interface
type EntryProp = {};

const filters = ["목록", "관심", "대기"];

const Entry: React.FC = () => {
	const [filter, setfilter] = useState("목록");

	const onFilterClick = (e: React.MouseEvent) => {
		setfilter(e.currentTarget.innerHTML);
	};

	return (
		<EntryComponent>
			<div className="entry__header">
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
					<SearchBox>
						<input type="text" placeholder="검색어를 입력하세요" />
						<div>검색</div>
					</SearchBox>
				</Filter>
			</div>
			<div className="entry__content">
				<div className="list__header"></div>
				<div>검색결과</div>
			</div>
		</EntryComponent>
	);
};

const EntryComponent = styled.div`
	box-shadow: 1px 1px 2px 2px #e2e2e2;
	min-width: 35vh;
`;

const Filter = styled.div`
	display: flex;
	justify-content: flex-start;
	border-bottom: 1px solid #dedede;

	& > div {
		height: 35px;
		width: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #4d4d4d;
		font-size: 14px;
		border-right: 1px solid #dedede;
	}

	& > div:nth-of-type(4) {
		width: 200px;
	}
`;

const SearchBox = styled.div`
	& > input {
		height: 95%;
		border: none;
	}
`;

export default Entry;
