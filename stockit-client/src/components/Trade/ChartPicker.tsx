import React from "react";
import styled from "@emotion/styled";

import { COLOR } from "../../constants/theme";

interface ChartPickerInterface {
	filter: string;
	setFilter: (_value: any) => void;
}

const ChartPicker: React.FC<ChartPickerInterface> = ({ filter, setFilter }) => {
	const onFilterClick = (e: React.MouseEvent) => {
		setFilter(e.currentTarget.innerHTML);
	};

	return (
		<Picker className="chart__picker">
			{filters.map((item, idx) => (
				<div
					key={idx}
					onClick={onFilterClick}
					style={
						item === filter
							? {
									backgroundColor: COLOR.BLUE,
									color: "white",
							  }
							: {}
					}
				>
					{item}
				</div>
			))}
		</Picker>
	);
};

const filters = ["1일", "1주", "1개월", "3개월", "1년", "3년"];

const Picker = styled.div`
	display: flex;
	justify-content: flex-start;
	border-bottom: 1px solid #dedede;

	& > div {
		border-right: 1px solid #dedede;
		width: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #4d4d4d;
		height: 40px;
		font-size: 15px;
		cursor: pointer;
	}
`;

export default ChartPicker;
