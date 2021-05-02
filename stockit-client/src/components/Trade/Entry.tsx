// 거래소 화면 우측에 있는 검색, 관심, 미체결 현황 확인을 위한 컴포넌트

import React from "react";

// interface
type EntryProp = {};

const Entry: React.FC = () => {
	return (
		<div>
			<div className="entry__header">
				<div>목록</div>
				<div>관심</div>
				<div>대기</div>
				<div className="searchbox">
					<input type="text" placeholder="검색어를 입력하세요." />
					<div className="searchBtn">검색</div>
				</div>
			</div>
			<div className="entry__content">
				<div className="list__header"></div>
				<div>검색결과나 뭐 그런거 리스트로 쭉 나오겠지</div>
			</div>
		</div>
	);
};

export default Entry;
