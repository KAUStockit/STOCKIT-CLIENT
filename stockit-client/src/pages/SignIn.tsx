import React, { useRef } from "react";
//* css : @emotion/styled
import { Container, Form, Button, Bottom } from "./SignInStyle";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import { REST_API_LOG } from "../utils/Networking";

// components
import InputWithLabel from "../components/common/InputWithLabel";
import { userState } from "../model/User";

function SignIn() {
	const history = useHistory();
	const setUser = useSetRecoilState(userState);

	// function
	const emailRef = useRef<HTMLInputElement>();
	const pwRef = useRef<HTMLInputElement>();

	const onLoginClick = async (e: React.FormEvent<HTMLButtonElement>) => {
		const loginData = {
			email: emailRef.current!.value,
			password: pwRef.current!.value,
		};

		//* login : POST - /api/members/login *//
		const result = await REST_API_LOG.logIn(loginData);
		console.log(result);

		//! 임시로 세션 대용
		localStorage.setItem("session", "4safg94-fs3");
		setUser({
			id: 1,
			name: "",
			nickname: "imnotmoon", // result에서 받아온걸로 바꿔야함
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
					ref={emailRef}
				></InputWithLabel>
				<InputWithLabel
					label="비밀번호"
					password={true}
					placeholder="비밀번호를 입력해주세요."
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

export default SignIn;
