import React, { useRef } from "react";
import styled from "@emotion/styled";
import { ADMIN } from "../../utils/Networking";
import { getCookie } from "../../utils/Cookie";

function Footer() {
	const stockNameRef = useRef<any>();
	const priceRef = useRef<any>();
	const categoryRef = useRef<any>();
	const descriptionRef = useRef<any>();

	const token = getCookie("user")?.token;

	const onClickSendButton = async () => {
		if (priceRef.current.value.match(/\D/gi)) return;
		if (!token) return;
		console.log("hihi");
		const result = await ADMIN.newStock(
			{
				stockName: stockNameRef.current.value,
				price: +priceRef.current.value,
				category: categoryRef.current.value,
				description: descriptionRef.current.value,
			},
			token
		);
		if (result.status === 200) {
			alert(`종목이 추가되었습니다.`);
		} else {
			alert("종목 추가에 실패했습니다.");
		}
	};

	return (
		<FooterComponent>
			<h3>종목 추가</h3>
			<input type="text" placeholder="종목명" ref={stockNameRef} />
			<input type="text" placeholder="가격" ref={priceRef} />
			<input type="text" placeholder="카테고리" ref={categoryRef} />
			<input type="text" placeholder="설명" ref={descriptionRef} />
			<button onClick={onClickSendButton}>추가</button>
		</FooterComponent>
	);
}

//* css : @emotion/styled
const FooterComponent = styled.div`
	margin-top: 100px;
	width: 100%;
	height: 20vh;
	background-color: #f2f2f2;
`;

export default Footer;
