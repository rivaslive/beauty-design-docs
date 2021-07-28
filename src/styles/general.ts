import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { fontNames } from './theme/theme';

const GlobalStyle = createGlobalStyle`
	${normalize}
	body {
		overflow: hidden;
		font-family: ${fontNames.roboto} !important;
		scroll-behavior: smooth;
	}

	* {
		scroll-behavior: smooth;
	}

	label {
		font-size: 1rem;
		line-height: 20px;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: ${fontNames.roboto};
	}
`;

export default GlobalStyle;
