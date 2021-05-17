import styled from "@emotion/styled";
import React, { useState } from "react";

// type
type ArticleProp = {
	stockId: number;
	stockClass: string; // 종목의 분류 (ex. 카카오게임즈 : 게임/엔터테인먼트)
};

const Article: React.FC<ArticleProp> = (stockId, stockClass) => {
	// 0이면 종목정보, 1이면 관련기사
	const [tabFocused, setTabFocused] = useState(0);

	const tabClick = (e: React.MouseEvent) => {
		if (e.currentTarget.textContent === "종목정보" && tabFocused === 1) {
			setTabFocused(0);
		} else if (
			e.currentTarget.textContent === "관련기사" &&
			tabFocused === 0
		) {
			setTabFocused(1);
		}
	};

	return (
		<ArticleComponent>
			<Filter>
				<div onClick={tabClick}>종목정보</div>
				<div onClick={tabClick}>관련기사</div>
			</Filter>
			<div className="article__content">
				{tabFocused === 0
					? "종목정보 컴포넌트 추가예정"
					: "관련뉴스 컴포넌트 추가예정"}
			</div>
		</ArticleComponent>
	);
};

const ArticleComponent = styled.div`
	box-shadow: 1px 1px 2px 2px #e2e2e2;
`;

const Filter = styled.div`
	display: flex;
	justify-content: flex-start;
	border-bottom: 1px solid #dedede;

	& > div {
		height: 40px;
		width: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #4d4d4d;
		font-size: 14px;
		border-right: 1px solid #dedede;
	}
`;

export default Article;
