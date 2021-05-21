import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/theme";

// interface
type MyStockListProp = {
	icon?: string;
	name: string;
	quantity: number;
	price: number;
	evaluation: number;
};

const MyStockList: React.FC<MyStockListProp> = ({
	name,
	quantity,
	price,
	evaluation,
	icon,
}) => {
	return (
		<Container>
			<div>icon</div>
			<div>{name}</div>
			<div>{quantity}</div>
			<div>{price}</div>
			<div>{evaluation}</div>
		</Container>
	);
};

//* css : @emotion/styled
const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 50px;
	border: 1px solid ${COLOR.BOX_BORDER};
	margin-top: 20px;
	width: 90%;
	font-size: 14px;
`;

export default MyStockList;
