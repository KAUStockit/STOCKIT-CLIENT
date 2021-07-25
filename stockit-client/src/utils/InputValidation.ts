// input Name validation
export const validateName = (name: string) => {
	if (name.length === 0) return "이름을 입력해주세요";
	return "";
};

// input ID validation
export const validateId = (id: string) => {
	// db의 아이디 목록과 대조해서 같은 아이디가 있으면
	// return "이미 사용중인 아이디입니다."

	// 아이디 길이 제한 : 일단은 15자로 제한
	if (id.length === 0) {
		return "아이디를 입력해주세요.";
	}
	if (id.length > 15) {
		return "아이디가 너무 깁니다.";
	}

	// 잘못된 문자가 포함되어있는 경우
	if (id.includes(" ") || id.includes("-")) {
		return "잘못된 문자가 포함되어있습니다.";
	}

	// 정상 아이디
	return "사용 가능한 아이디입니다.";
};

// input password validation
export const validatePassword = (password: string) => {
	// 비밀번호 길이
	if (password.length < 8 || password.length > 19) {
		return "8 ~ 20자 사이로 입력해주세요.";
	}
	return "";
};

// input retyped password validation
export const validateRePassword = (password: string) => {
	// 비밀번호 길이
	if (password.length < 8 || password.length > 19) {
		return "8 ~ 20자 사이로 입력해주세요.";
	}
	return "";
};

// input email validation
export const validateEmail = (email: string) => {
	if (!email.includes("@")) {
		return false;
	}

	// 인증 이메일 발송

	return true;
};
