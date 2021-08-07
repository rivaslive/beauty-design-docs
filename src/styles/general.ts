import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { fontNames } from './theme/theme';

const GlobalStyle = createGlobalStyle`
	${normalize}
	body {
		overflow-x: hidden;
		font-family: ${fontNames.roboto} !important;
		scroll-behavior: smooth;
		font-family: -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, "helvetica neue", Arial, "noto sans", sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol", "noto color emoji";;
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
`;

export default GlobalStyle;
