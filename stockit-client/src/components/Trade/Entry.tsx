// 거래소 화면 우측에 있는 검색, 관심, 미체결 현황 확인을 위한 컴포넌트

import React, { useState } from "react";
import styled from "@emotion/styled";

import { COLOR } from "../../constants/theme";
import SearchFilter from "./SearchFilter";
import Star from "./Star";

const Entry: React.FC = () => {
	const [filter, setFilter] = useState("목록");

	return (
		<EntryComponent>
			<div className="entry__header">
				<SearchFilter filter={filter} setFilter={setFilter} />
			</div>
			<div className="entry__content">
				<div className="list__header"></div>
				<div>
					<ListFilter>
						<div>인기순</div>
						<div>현재가</div>
						<div>거래대금</div>
						<div>...</div>
					</ListFilter>
					<EntryItems>
						{createEntryItem("카카오게임즈", "53,500", "3,874,110 백만", true)}
						{createEntryItem("카카오게임즈", "53,500", "3,874,110 백만", false)}
					</EntryItems>
				</div>
			</div>
		</EntryComponent>
	);
};

const createEntryItem = (name: string, price: string, flow: string, isChecked: boolean) => {
	return (
		<div>
			<div>{name}</div>
			<div>{price}</div>
			<div>{flow}</div>
			<div>
				<Star checked={isChecked} />
			</div>
		</div>
	);
};

export const EntryComponent = styled.div`
	box-shadow: 1px 1px 2px 2px #e2e2e2;
	min-width: 35vh;
`;

export const ListFilter = styled.div`
	display: grid;
	height: 35px;
	grid-template-columns: 3fr 2fr 5fr 1fr;

	& > div {
		height: 100%;
		width: 100%;
		text-align: center;
		line-height: 35px;
		font-size: 13px;
		border-bottom: 1px solid ${COLOR.INPUT_BORDER};
	}
`;
export const EntryItems = styled.div`
	& > div {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: 3fr 2fr 5fr 1fr;
		height: 40px;
		border-bottom: 1px solid ${COLOR.INPUT_BORDER};

		& > div {
			font-size: 13px;
		}
	}
`;

export default Entry;
