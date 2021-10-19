import React from "react";
import styled from "@emotion/styled";

const SearchBox = () => {
	return (
		<Container>
			<input type="text" placeholder="검색어를 입력하세요" />
			<div>검색</div>
		</Container>
	);
};

export const Container = styled.div`
	& > input {
		height: 95%;
		border: none;
		padding-left: 10px;

		&:focus {
			outline: none;
		}
	}

	& > div:nth-of-type(1) {
		width: 50px;
	}
`;

export default SearchBox;
