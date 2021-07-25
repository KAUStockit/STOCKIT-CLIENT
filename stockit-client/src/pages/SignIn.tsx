import React, { useRef } from "react";
import styled from "@emotion/styled";
import { validateId, validatePassword } from "../utils/InputValidation";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";

// theme
import { COLOR } from "../constants/theme";

// components
import InputWithLabel from "../components/common/InputWithLabel";
import { userState } from "../model/User";

function SignIn() {
	const history = useHistory();
	const setUser = useSetRecoilState(userState);

	// function
	const emailRef = useRef();
	const pwRef = useRef();

	const onLoginClick = (e: React.FormEvent<HTMLButtonElement>) => {
		console.log("메인 페이지로 이동합니다.");

		localStorage.setItem("session", "4safg94-fs3");
		setUser({
			id: 1,
			name: "",
			nickname: "imnotmoon",
			sessionId: "4safg94-fs3",
			useAdvanced: false,
			currentStockId: [],
		});
		history.push(`/`);
	};

	return (
		<Container>
			<h3 style={{ margin: "40px 0 40px 0" }}>로그인</h3>
			<Form>
				<InputWithLabel
					label="이메일"
					password={false}
					placeholder="이메일을 입력해주세요."
					validation={validateId}
					ref={emailRef}
				></InputWithLabel>
				<InputWithLabel
					label="비밀번호"
					password={true}
					placeholder="비밀번호를 입력해주세요."
					validation={validatePassword}
					ref={pwRef}
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
