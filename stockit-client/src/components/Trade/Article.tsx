import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { COLOR } from "../../constants/theme";

import { ArticleProp } from "../../interfaces/TradeInterface";
import Information from "./Information";

const Article: React.FC<ArticleProp> = (stockId) => {
	// 0이면 종목정보, 1이면 관련기사
	const [tabFocused, setTabFocused] = useState("종목정보");
	const [stockInfo, setStockInfo] = useState({ name: "", category: "", info: "", news: [] });

	const tabClick = (e: React.MouseEvent) => {
		if (e.currentTarget.innerHTML === "종목정보" && tabFocused === "관련기사") {
			setTabFocused("종목정보");
		} else if (e.currentTarget.innerHTML === "관련기사" && tabFocused === "종목정보") {
			setTabFocused("관련기사");
		}
	};

	useEffect(() => {
		// API : 주식 정보 받아오기 ->
		// REST_STOCK.info(stockId).then(setStockInfo);
		setStockInfo({
			name: "카카오게임즈",
			category: "게임, 엔터테인먼트",
			info: "동사는 모바일 메신저 ‘카카오톡’과 포털 ‘DAUM’ 서비스를 활용하여 모바일게임과 PC게임의 퍼블리싱 및 채널링사업을 영위함. 최근 전문 개발 자회사를 설립 및 인수하여 캐주얼에서 하드코어 장르까지 아우르는 개발사로 사업영역을 확장 중. 다양한 게임 개발력을 확보하여 게임 개발, 퍼블리싱, 플랫폼 역량을 모두 보유한 종합 게임사이며 역량있는 게임 개발회사를 발굴하여 인수 및 지분투자를 진행.",
			news: [],
		});
	}, []);

	return (
		<ArticleComponent>
			<Filter>
				<div
					onClick={tabClick}
					style={tabFocused === "종목정보" ? { backgroundColor: COLOR.BLUE, color: "white" } : {}}
				>
					종목정보
				</div>
				<div
					onClick={tabClick}
					style={tabFocused === "관련기사" ? { backgroundColor: COLOR.BLUE, color: "white" } : {}}
				>
					관련기사
				</div>
			</Filter>
			<div className="article__content">
				{tabFocused === "종목정보" ? (
					<Information name={stockInfo.name} category={stockInfo.category} info={stockInfo.info} />
				) : (
					"관련뉴스 컴포넌트 추가예정"
				)}
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
		cursor: pointer;
	}
`;

export default Article;
