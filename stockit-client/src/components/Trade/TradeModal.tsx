// 사기 / 팔기 버튼을 눌렀을때 뜨는 모달창 컴포넌트

import React from "react";

// interface
type TradeModalProp = {
	type: string;
	hide: any;
};

const TradeModal: React.FC<TradeModalProp> = ({ type, hide }) => {
	const onClose = () => {
		hide(false);
	};

	return (
		<div>
			{type}
			<button onClick={onClose}>취소</button>
		</div>
	);
};

export default TradeModal;
