import React from "react";
import styled from "@emotion/styled";
import { validateId, validatePassword } from "../utils/InputValidation";
import { useHistory } from "react-router";

// theme
import { COLOR } from "../constants/theme";

// components
import InputWithLabel from "../components/common/InputWithLabel";

function SignIn() {
	const history = useHistory();

	const onLoginClick = (e: React.FormEvent<HTMLButtonElement>) => {
		console.log("메인 페이지로 이동합니다.");
		history.push(`/`);
	};

	return (
		<Container>
			<h3 style={{ margin: "40px 0 40px 0" }}>로그인</h3>
			<Form>
				<InputWithLabel
					label="아이디"
					password={false}
					placeholder="아이디를 입력해주세요."
					validation={validateId}
				></InputWithLabel>
				<InputWithLabel
					label="비밀번호"
					password={true}
					placeholder="비밀번호를 입력해주세요."
					validation={validatePassword}
				></InputWithLabel>
			</Form>
			<Button onClick={onLoginClick}>확인</Button>

			<br />
			<Bottom>
				<p>간편로그인</p>
				<button>카카오 로그인</button>
			</Bottom>
		</Container>
	);
}

//* css : @emotion/styled
const Container = styled.div`
	margin: 0 10% 0 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Form = styled.div`
	min-width: 40vh;
	max-width: 60vh;
`;

const Button = styled.button`
	margin-top: 40px;
	color: white;
	min-width: 40vh;
	max-width: 60vh;
	height: 50px;
	background-color: ${COLOR.GRAPH_BLUE};
	outline: none;
	border: none;
	border-radius: 5px;
	font-size: 14px;
	font-weight: 600;

	&:active {
		background-color: ${COLOR.BLUE};
	}
`;

const Bottom = styled.div`
	min-width: 40vh;
	max-width: 60vh;

	& > p {
		display: block;
		left: 5px;
		font-size: 14px;
		padding-bottom: 5px;
		border-bottom: 1px solid ${COLOR.INPUT_BORDER};
	}
	& > button {
		min-width: 40vh;
		max-width: 60vh;
		outline: none;
		border: none;
		border-radius: 5px;
		font-size: 14px;
		font-weight: 600;
		height: 50px;
		background-color: #fae523;
	}

	& > button:active {
		background-color: #ffd700;
	}
`;
export default SignIn;
