import React, { useState } from "react";
import styled from "@emotion/styled";

import { COLOR } from "../../constants/theme";
import useValidationInput from "../../hooks/useValidateInput";

type InputWithLabelProps = {
	label: string;
	password: boolean;
	placeholder: string;
	ref: any;
};

const InputWithLabel: React.FC<InputWithLabelProps> = React.forwardRef(({ label, password, placeholder }, ref: any) => {
	const [inputValue, setInputValue] = useState<string>("");
	const { message, validateNickName } = useValidationInput();

	const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
	};

	return (
		<Container>
			<div>
				<p>{label}</p>
				<p className="validation">{message}</p>
			</div>
			<input
				type={password ? "password" : "text"}
				placeholder={placeholder}
				ref={ref}
				onChange={onInputChange}
				value={inputValue}
				onBlur={label === "닉네임" ? validateNickName : () => {}}
			/>
		</Container>
	);
});

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
		border: 1px solid ${COLOR.BLUE};
		box-shadow: 1px 1px 3px ${COLOR.INPUT_BORDER};
	}
`;

export default InputWithLabel;
