import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

// interface
import { MyStockListProp } from "../../interfaces/BalanceInterface";

const MyStockList: React.FC<MyStockListProp> = ({ name, quantity, price, evaluation, icon }) => {
	return (
		<Container>
			<div>
				<img src="" alt="" />
				{name}
			</div>
			<div>{quantity}</div>
			<div>{price}</div>
			<div>{evaluation}</div>
			<div>{((evaluation - price * quantity) / (price * quantity)) * 100}%</div>
		</Container>
	);
};

//* css : @emotion/styled
const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	justify-items: center;
	align-items: center;
	height: 50px;
	border: 1px solid ${COLOR.BOX_BORDER};
	margin-top: 20px;
	width: 90%;
	font-size: 14px;
`;

export default MyStockList;
