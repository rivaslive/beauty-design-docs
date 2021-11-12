import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { colors, fontNames } from './theme/theme';

const GlobalStyle = createGlobalStyle`
	${normalize}
	body {
		overflow-x: hidden;
		overflow-y: ${({ theme }: any) => (theme?.isHome ? 'scroll' : 'hidden')};
		font-family: ${fontNames.roboto} !important;
		scroll-behavior: smooth;
		font-family: -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, "helvetica neue", Arial, "noto sans", sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol", "noto color emoji";;
	}

	::selection {
		background: ${colors.primary};
	}

	* {
		scroll-behavior: smooth;
		font-family: -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, "helvetica neue", Arial, "noto sans", sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol", "noto color emoji";;
	}

	label {
		font-size: 1rem;
		line-height: 20px;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: ${fontNames.roboto};
	}

	.max-width {
		max-width: 100%;
	}

	.ant-message {
		margin-top: 100px;
	}

	.block-code {
		position: relative;

		.hljs {
			border-radius: 12px;
		}
	}

	button.block-code__copy {
		position: absolute;
		top: 10px;
		right: 10px;
		background-color: rgba(255, 255, 255, 0.1);
		border: none;
		color: white;

		.anticon {
			color: #eaeaea;
		}

		&:hover {
			background-color: rgba(255, 255, 255, 0.1);
			border: none;
			opacity: 0.7;
			color: white;
		}

		&:focus,
		&:active {
			background-color: rgba(255, 255, 255, 0.1);
			border: none;
			opacity: 1;
			color: white;
		}
	}
`;

export default GlobalStyle;
