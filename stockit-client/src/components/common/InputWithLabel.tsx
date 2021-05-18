import React, { useRef } from "react";
import styled from "@emotion/styled";

// theme
import { COLOR } from "../../constants/theme";

// interface
type InputWithLabelProps = {
	label: string;
	password: boolean;
	placeholder: string;
	message: "";
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({
	label,
	password,
	placeholder,
	message,
}) => {
	const messageRef = useRef<HTMLParagraphElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<Container>
			<div>
				<p>{label}</p>
				<p ref={messageRef}>{message}</p>
			</div>
			<input
				type={password ? "password" : "text"}
				placeholder={placeholder}
				ref={inputRef}
			/>
		</Container>
	);
};

//* css : @emotion/styled
const Container = styled.div`
	margin-bottom: 20px;
	min-width: 40vh;
	max-width: 80vh;
	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	& > div > p:nth-of-type(1) {
		font-weight: 700;
		font-size: 15px;
	}
	& > div > p:nth-of-type(2) {
		font-weight: 400;
		font-size: 14px;
	}

	& > input {
		height: 4vh;
		width: 100%;
		border: 1px solid ${COLOR.INPUT_BORDER};
		border-radius: 5px;
		background-color: white;
		padding-left: 10px;
	}

	& > input:focus {
		background-color: white;
		outline: none;
		box-shadow: 1px 1px 3px ${COLOR.INPUT_BORDER};
	}
`;

export default InputWithLabel;
