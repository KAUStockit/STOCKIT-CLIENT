import { useState } from "react";
import { REST_API_LOG } from "../utils/Networking";

const useValidationInput = () => {
	const [message, setMessage] = useState<string>("");

	const validateNickName = async (e: React.FormEvent<HTMLInputElement>) => {
		if (e.currentTarget.value === "") {
			setMessage("");
			return;
		}
		try {
			const result: any = await REST_API_LOG.checkValidNickName(e.currentTarget.value);
			setMessage(result.data.message);
		} catch (e) {
			setMessage("이미 사용중인 닉네임입니다.");
		}
	};

	return { message, validateNickName };
};

export default useValidationInput;
