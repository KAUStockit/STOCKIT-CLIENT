import React, { useRef } from "react";
import styled from "@emotion/styled";
import { ADMIN } from "../../utils/Networking";

function Footer() {

	const stockNameRef = useRef<any>();
	const priceRef = useRef<any>();

	const onClickSendButton = async () => {
		if(priceRef.current.value.match(/\D/gi)) return;
		const result = await ADMIN.newStock({
			stockName : stockNameRef.current.value,
			price: +(priceRef.current.value)
		});
		console.log(result);
	}

	return <FooterComponent>
		<h3>종목 추가</h3>
		<input type="text" placeholder="종목명" ref={stockNameRef}/>
		<input type="text" placeholder="가격"ref={priceRef}/>
		<button onClick={onClickSendButton}>추가</button>
	</FooterComponent>;
}

//* css : @emotion/styled
const FooterComponent = styled.div`
	margin-top: 100px;
	width: 100%;
	height: 20vh;
	background-color: #f2f2f2;
`;

export default Footer;
