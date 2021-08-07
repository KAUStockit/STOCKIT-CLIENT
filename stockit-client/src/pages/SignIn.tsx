import React, { useRef } from "react";
import { useHistory } from "react-router";
import { REST_API_LOG } from "../utils/Networking";
import { getCookie, setCookie } from "../utils/Cookie";

//* css : @emotion/styled
import { Container, Form, Button, Bottom } from "./SignInStyle";

// components
import InputWithLabel from "../components/common/InputWithLabel";

function SignIn() {
	const history = useHistory();

	// function
	const emailRef = useRef<HTMLInputElement>();
	const pwRef = useRef<HTMLInputElement>();

	const onLoginClick = async (e: React.FormEvent<HTMLButtonElement>) => {
		const loginData = {
			email: emailRef.current!.value,
			password: pwRef.current!.value,
		};

		//* login : POST - /api/members/login *//
		try {
			const result = await REST_API_LOG.logIn(loginData);
			const now = new Date();
			const cookieExpires = new Date();
			cookieExpires.setMinutes(now.getMinutes() + 30);
			setCookie("user", result.data, { path: "/", expires: cookieExpires });
			history.push(`/`);
			window.location.reload();
		} catch (err) {
			alert("로그인에 실패했습니다.");
			return;
		}
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
