import styled from "@emotion/styled";

export const Row = styled.div<{ buySell: string }>`
	-webkit-box-shadow: 0px 0px 2px 0px #bebebe;
	box-shadow: 0px 0px 2px 0px #bebebe;
	height: 50px;
	width: 90%;
	margin: 10px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	justify-items: center;

	& > div {
		display: flex;
		align-items: center;
	}

	& > div:nth-of-type(2) {
		color: ${(props) => (props.buySell === "매도" ? "blue" : "red")};
	}
`;
