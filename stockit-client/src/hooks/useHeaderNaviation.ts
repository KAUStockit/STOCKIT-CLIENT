import { useHistory } from "react-router";

const useHeaderNavigation = (user: string) => {
	const history = useHistory();

	const onLogoClick = (e: React.MouseEvent) => {
		e.preventDefault();
		history.push("/");
	};

	const onPlayGroundClick = (e: React.MouseEvent) => {
		e.preventDefault();
		history.push("/playground");
	};

	const onTradeClick = (e: React.MouseEvent) => {
		e.preventDefault();
		const lastStockId = window.localStorage.getItem("lastStockId");
		history.push(`/${lastStockId}/trade`);
	};

	const onBalanceClick = (e: React.MouseEvent) => {
		e.preventDefault();
		history.push("/balance");
	};

	const onSignUpClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (user.length === 0) {
			history.push("/signup");
		} else {
			history.push("/logout");
		}
	};

	const onSignInClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (user.length === 0) {
			history.push("/signin");
		} else {
			history.push("/mypage");
		}
	};

	return { onSignInClick, onSignUpClick, onBalanceClick, onTradeClick, onPlayGroundClick, onLogoClick };
};

export default useHeaderNavigation;
