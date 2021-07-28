import styled, { css } from 'styled-components';

import { fontNames } from 'styles/theme/theme';

export type VariantType = 'ROBOT_16_22_400' | 'ROBOT_24_28_400' | 'ROBOT_20_25_400';

export interface ITextProps {
	variant?: VariantType;
	children?: string;
	color?: string;

	[key: string]: unknown;
}

export interface IProps {
	$variant: VariantType;
	$color?: string;
}

export const cssTextVariant = {
	ROBOT_16_22_400: css`
		font-family: ${fontNames.roboto};
		font-size: 16px;
		line-height: 22px;
		font-weight: 400;
	`,
	ROBOT_20_25_400: css`
		font-family: ${fontNames.roboto};
		font-size: 20px;
		line-height: 25px;
		font-weight: 400;
	`,
	ROBOT_24_28_400: css`
		font-family: ${fontNames.roboto};
		font-size: 24px;
		line-height: 28px;
		font-weight: 400;
	`,
};

export const StyleText = styled.div<IProps>`
	${({ $variant }) => cssTextVariant[$variant]}
`;
