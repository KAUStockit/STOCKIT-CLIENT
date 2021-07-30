import React, { useRef } from "react";
//* css : @emotion/styled
import { Container, Form, Button, Bottom } from "./SignInStyle";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";

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
