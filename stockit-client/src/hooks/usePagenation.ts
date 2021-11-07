import { useState } from "react";
import { MyStock } from "../interfaces/MyPageInterface";

const usePagenation = (myStocks: Array<MyStock>) => {
	const [currentPage, setCurrentPage] = useState<number>(1);

	let totalPages = (() => {
		let tmp = [];
		for (let i = 0; i < myStocks.length / 5; i++) {
			tmp.push(i + 1);
		}
		return tmp;
	})();

	const onPrevClick = () => {
		if (currentPage > 1) setCurrentPage((currentPage) => currentPage - 1);
	};

	const onPageClick = (e: React.MouseEvent) => {
		setCurrentPage(+e.currentTarget.innerHTML);
	};

	const onNextClick = () => {
		if (currentPage < totalPages.length) setCurrentPage((currentPage) => currentPage + 1);
	};

	return { currentPage, totalPages, onPrevClick, onPageClick, onNextClick };
};

export default usePagenation;
