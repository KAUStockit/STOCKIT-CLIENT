// 거래소 화면 우측에 있는 검색, 관심, 미체결 현황 확인을 위한 컴포넌트

import React, { useState } from "react";
import { COLOR } from "../../constants/theme";
import { EntryComponent, Filter, SearchBox, ListFilter, EntryItems } from "./EntryStyle";

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
			<div>{createStar(isChecked)}</div>
		</div>
	);
};

const createStar = (checked: boolean) => {
	if (checked) {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17">
				<path
					id="패스_134"
					data-name="패스 134"
					d="M72.271,68.315l1.178,3.578a1.379,1.379,0,0,0,1.312.937h3.817a1.356,1.356,0,0,1,.81,2.458L76.3,77.5a1.345,1.345,0,0,0-.5,1.519l1.178,3.576a1.373,1.373,0,0,1-2.12,1.519l-3.09-2.21a1.392,1.392,0,0,0-1.62,0l-3.088,2.21a1.374,1.374,0,0,1-2.122-1.519l1.18-3.576a1.348,1.348,0,0,0-.5-1.519l-3.09-2.21a1.356,1.356,0,0,1,.81-2.458h3.819a1.376,1.376,0,0,0,1.31-.937l1.18-3.578A1.385,1.385,0,0,1,72.271,68.315Z"
					transform="translate(-61.959 -67.376)"
					fill="#ffd800"
				/>
			</svg>
		);
	} else {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17">
				<path
					id="패스_133"
					data-name="패스 133"
					d="M72.271,68.315l1.178,3.578a1.379,1.379,0,0,0,1.312.937h3.817a1.356,1.356,0,0,1,.81,2.458L76.3,77.5a1.345,1.345,0,0,0-.5,1.519l1.178,3.576a1.373,1.373,0,0,1-2.12,1.519l-3.09-2.21a1.392,1.392,0,0,0-1.62,0l-3.088,2.21a1.374,1.374,0,0,1-2.122-1.519l1.18-3.576a1.348,1.348,0,0,0-.5-1.519l-3.09-2.21a1.356,1.356,0,0,1,.81-2.458h3.819a1.376,1.376,0,0,0,1.31-.937l1.18-3.578A1.385,1.385,0,0,1,72.271,68.315Z"
					transform="translate(-61.959 -67.376)"
					fill="#f0f0f0"
				/>
			</svg>
		);
	}
};

export default Entry;
