import React, { useState } from "react";
//* css : @emotion/styled
import { Container, Form, Button, EmailForm, Bottom } from "./SignUpStyle";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";

// Networking
import { REST_API_LOG } from "../utils/Networking";

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
	const [emailValidateMsg, setEmailValidateMsg] = useState<string>("");
	const history = useHistory();

	const setUser = useSetRecoilState(userState);

	// functions
	const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};
	const validateEmail = async (e: React.FormEvent<HTMLInputElement>) => {
		if (e.currentTarget.value === "") {
			setEmailValidateMsg("");
			return;
		}
		const { data } = await REST_API_LOG.checkValidEmailAddress(email);
		console.log(data);
		setEmailValidateMsg(data);
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
				<InputWithLabel label="이름" password={false} placeholder="이름을 입력해주세요." ref={nameRef} />
				<InputWithLabel
					label="닉네임"
					password={false}
					placeholder="닉네임을 입력해주세요."
					ref={idRef}
				></InputWithLabel>
				<InputWithLabel
					label="비밀번호"
					password={true}
					placeholder="비밀번호를 입력해주세요."
					ref={pwRef}
				></InputWithLabel>
				<InputWithLabel
					label="비밀번호 확인"
					password={true}
					placeholder="비밀번호를 재입력해주세요."
					ref={pwRetypeRef}
				></InputWithLabel>
				<EmailForm>
					<div>
						<p>이메일 인증</p>
						<p>{emailValidateMsg}</p>
					</div>
					<div>
						<input
							type="text"
							placeholder="이메일을 입력해주세요"
							onChange={onEmailChange}
							onBlur={validateEmail}
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

export default SignUp;
