import React, { useState } from "react";
import styled from "@emotion/styled";
import {
	validateName,
	validateId,
	validateEmail,
	validatePassword,
	validateRePassword,
} from "../utils/InputValidation";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";

// Networking
import { REST_API_LOG } from "../utils/Networking";

// theme
import { COLOR } from "../constants/theme";

// components
import InputWithLabel from "../components/common/InputWithLabel";

// Testing
import { userState } from "../model/User";

// interface
type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
	// States
	const nameRef = React.useRef<HTMLInputElement>();
	const idRef = React.useRef<HTMLInputElement>();
	const pwRef = React.useRef<HTMLInputElement>();
	const pwRetypeRef = React.useRef<HTMLInputElement>();
	const [email, setEmail] = useState<string>("");
	const history = useHistory();

	const setUser = useSetRecoilState(userState);

	// functions
	const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};
	const clickJoinButton = async (e: React.MouseEvent) => {
		const data = {
			name: nameRef.current?.value,
			nickname: idRef.current?.value,
			password: pwRef.current?.value,
			email: email,
		};

		//* join : POST - /api/members/new *//
		const userId = await REST_API_LOG.signUp(data);
		alert(`회원가입이 완료되었습니다, userId : ${userId}`);
		setUser({
			id: userId,
			name: data.name!,
			nickname: data.nickname!,
			sessionId: userId,
			useAdvanced: false,
			currentStockId: [],
		});
		history.push("/");
	};

	return (
		<Container>
			<h3 style={{ margin: "40px 0 40px 0" }}>회원가입</h3>
			<Form>
				<InputWithLabel
					label="이름"
					password={false}
					placeholder="이름을 입력해주세요."
					validation={validateName}
					ref={nameRef}
				/>
				<InputWithLabel
					label="닉네임"
					password={false}
					placeholder="닉네임을 입력해주세요."
					validation={validateId}
					ref={idRef}
				></InputWithLabel>
				<InputWithLabel
					label="비밀번호"
					password={true}
					placeholder="비밀번호를 입력해주세요."
					validation={validatePassword}
					ref={pwRef}
				></InputWithLabel>
				<InputWithLabel
					label="비밀번호 확인"
					password={true}
					placeholder="비밀번호를 재입력해주세요."
					validation={validateRePassword}
					ref={pwRetypeRef}
				></InputWithLabel>
				<EmailForm>
					<p>이메일 인증</p>
					<div>
						<input
							type="text"
							placeholder="이메일을 입력해주세요"
							onChange={onEmailChange}
						/>
						<button>인증</button>
					</div>
				</EmailForm>
			</Form>
			<Button onClick={clickJoinButton}>확인</Button>

			<br />
			<Bottom>
				<p>간편회원가입</p>
				<button>카카오 로그인</button>
			</Bottom>
		</Container>
	);
};

// Input Validation Functions

//* css : @emotion/styled
const Container = styled.div`
	margin: 0 10% 0 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Form = styled.div`
	min-width: 40vh;
	max-width: 80vh;
`;

const EmailForm = styled.div`
	margin-bottom: 20px;
	width: 100%;
	& > p {
		font-weight: 700;
		font-size: 15px;
	}

	& > div {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	& > div > input {
		height: 4vh;
		width: 80%;
		border: 1px solid ${COLOR.INPUT_BORDER};
		border-radius: 5px;
		background-color: white;
		padding-left: 10px;
	}

	& > div > input:focus {
		background-color: white;
		outline: none;
		border: 1px solid ${COLOR.BLUE};
		box-shadow: 1px 1px 3px ${COLOR.INPUT_BORDER};
	}

	& > div > button {
		width: 15%;
		color: white;
		background-color: ${COLOR.GRAPH_BLUE};
		outline: none;
		border: none;
		border-radius: 5px;
		font-weight: 600;
	}

	& > div > button:active {
		background-color: ${COLOR.BLUE};
	}
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

export default SignUp;
