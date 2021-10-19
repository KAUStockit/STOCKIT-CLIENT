import React from "react";
import styled from "@emotion/styled";

interface LogoInterface {
	logoClickHandler: (e: React.MouseEvent) => void;
}

const Logo: React.FC<LogoInterface> = ({ logoClickHandler }) => {
	return (
		<Container>
			<svg
				onClick={logoClickHandler}
				xmlns="http://www.w3.org/2000/svg"
				width="107"
				height="32"
				viewBox="0 0 107 32"
				style={{ cursor: "pointer" }}
			>
				<text
					id="Stockit"
					transform="translate(0 25)"
					fill="#fff"
					fontSize="32"
					fontFamily="Helvetica-Bold, Helvetica"
					fontWeight="700"
				>
					<tspan x="0" y="0">
						Stoc
					</tspan>
					<tspan y="0" fill="#00fab6">
						kit
					</tspan>
				</text>
			</svg>
		</Container>
	);
};

export const Container = styled.div`
	display: flex;
	align-items: center;
	width: 40vw;

	$ > a {
		width: 150px;
	}
`;

export default Logo;
