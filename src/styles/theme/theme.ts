export const breakpoints = {
	mobile: 0, // 0 to 767
	mobileSm: 525, // 0 to 525
	tablet: 768, // 768 to 1023
	bigTablet: 1024, // 1024 to 1139
	smallDesktop: 1140, // 1140 to 1439
	desktop: 1440, // 1440 to 1919
	fullWidth: 1920, // 1920 and above
};

export type ColorVariant =
	| 'primary'
	| 'black'
	| 'white'
	| 'cian'
	| 'celeste'
	| 'azul'
	| 'azure'
	| 'azulVioleta'
	| 'magenta'
	| 'purpleBlue'
	| 'purple1'
	| 'purple2'
	| 'bg';

export const colors = {
	primary: '#713DF9',
	black: '#000000',
	white: '#FFFFFF',
	cian: '#4DC7EB',
	celeste: '#79DEF6',
	azul: '#2740D6',
	azure: '#8C00F8',
	azure2: '#6E41E2',
	azulVioleta: '#5C4CF4',
	magenta: '#EB008A',
	purpleBlue: '#A300EB',
	purple1: '#CB00B6',
	purple2: '#B600D4',
	bg: '#f1f1f1',
};

export const mediaQueries = {
	maxSmallMobile: '@media screen and (max-width: 320px)',
	minMobile: `@media screen and (min-width: ${breakpoints.mobile}px)`,
	maxMobile: `@media screen and (max-width: ${breakpoints.tablet - 1}px)`,
	minMobileSm: `@media screen and (min-width: ${breakpoints.mobileSm}px)`,
	maxMobileSm: `@media screen and (max-width: ${breakpoints.mobileSm - 1}px)`,
	minTablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
	maxTablet: `@media screen and (max-width: ${breakpoints.bigTablet - 1}px)`,
	minBigTablet: `@media screen and (min-width: ${breakpoints.bigTablet}px)`,
	maxBigTablet: `@media screen and (max-width: ${
		breakpoints.smallDesktop - 1
	}px)`,
	minSmallDesktop: `@media screen and (min-width: ${breakpoints.smallDesktop}px)`,
	maxSmallDesktop: `@media screen and (max-width: ${
		breakpoints.desktop - 1
	}px)`,
	minDesktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
	maxDesktop: `@media screen and (max-width: ${breakpoints.fullWidth - 1}px)`,
	minFullwidth: `@media screen and (min-width: ${breakpoints.fullWidth}px)`,
};

export const fallbackFonts = 'Sans-Serif';

export const fontNames = {
	roboto: `"Roboto", ${fallbackFonts}`,
};

export const fontWeights = {
	/** normal => 400 */
	normal: 400,
	/** regular => 400 */
	regular: 400,
	/* Medium => 500 */
	medium: 500,
	/** semi-bold => 600 */
	semiBold: 600,
	/** bold => 700 */
	bold: 800,
};

const theme = {
	colors,
	breakpoints,
	mediaQueries,
	fontWeights,
	fontNames,
};

export interface CustomTheme {
	colors: typeof colors;
	breakpoints: typeof breakpoints;
	mediaQueries: typeof mediaQueries;
	fontWeights: typeof fontWeights;
}

export default theme;
