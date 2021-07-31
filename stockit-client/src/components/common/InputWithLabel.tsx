import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

// theme
import { COLOR } from "../../constants/theme";

import { REST_API_LOG } from "../../utils/Networking";

// interface
type InputWithLabelProps = {
	label: string;
	password: boolean;
	placeholder: string;
	ref: any;
};

const InputWithLabel: React.FC<InputWithLabelProps> = React.forwardRef(({ label, password, placeholder }, ref: any) => {
	// states
	const [inputValue, setInputValue] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
	};

	const validateNickName = async (e: React.FormEvent<HTMLInputElement>) => {
		if (e.currentTarget.value === "") {
			setMessage("");
			return;
		}
		const result: any = await REST_API_LOG.checkValidNickName(e.currentTarget.value);
		console.log(result);
		// setMessage(result.data);
	};

	return (
		<Container>
			<div>
				<p>{label}</p>
				<p>{message}</p>
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
