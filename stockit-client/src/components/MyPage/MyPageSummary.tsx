import React from "react";
import styled from "@emotion/styled";

import { COLOR } from "../../constants/theme";

const MyPageSummary = () => {
	return (
		<Total>
			<div>
				<div className="info_gray">보유금액</div>
				<span className="info_black">2,000,000</span>
			</div>
			<div>
				<div className="info_gray">총 매수금액</div>
				<span className="info_black">2,000,000</span>
			</div>
			<div>
				<div className="info_gray">총 평가금액</div>
				<span className="info_black">2,000,000</span>
			</div>
			<div>
				<div className="info_gray">총 보유자산</div>
				<span className="info_black">2,000,000,000</span>
			</div>
			<div>
				<div className="info_gray">총 평가손익</div>
				<span className="info_black">+2,000,000,000</span>
			</div>
			<div>
				<div className="info_gray">총 평가 수익률</div>
				<span className="info_percent">+200%</span>
			</div>
		</Total>
	);
};

export const Total = styled.div`
	width: 60%;
	display: grid;
	padding-left: 30px;
	padding-right: 30px;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 30px;
	grid-row-gap: 30px;

	& > div > div.info_gray {
		color: #848484;
		margin-bottom: 5px;
	}
	& > div > span.info_black {
		color: "black";
	}
	& > div > span.info_percent {
		color: ${COLOR.BLUE};
	}
`;

export default MyPageSummary;
