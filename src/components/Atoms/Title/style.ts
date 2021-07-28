import { Typography } from 'antd';
import styled, { css } from 'styled-components';
import { TitleProps } from 'antd/lib/typography/Title';

import { fontNames } from 'styles/theme/theme';
import { ReactNode } from 'react';

const { Title } = Typography;

export type VariantType =
	| 'ROBOT_28_39_400'
	| 'ROBOT_24_28_500'
	| 'ROBOT_36_50_500';
export type TextTransformType =
	| 'uppercase'
	| 'lowercase'
	| 'capitalize'
	| 'none';

export interface ITitleProps extends TitleProps {
	variant?: VariantType;
	children?: ReactNode;
	color?: string;
	textTransform?: TextTransformType;
}

export interface IProps extends TitleProps {
	$variant: VariantType;
	$color?: string;
	$textTransform: TextTransformType;
}

export const cssTitleVariant = {
	ROBOT_28_39_400: css`
		font-family: ${fontNames.roboto};
		font-size: 28px;
		line-height: 39px;
		font-weight: 400;
	`,
	ROBOT_24_28_500: css`
		font-family: ${fontNames.roboto};
		font-size: 24px;
		line-height: 28px;
		font-weight: 500;
	`,
	ROBOT_36_50_500: css`
		font-family: ${fontNames.roboto};
		font-size: 36px;
		line-height: 50px;
		font-weight: 500;
	`,
};

const transforms = {
	none: `none`,
	uppercase: `uppercase`,
	lowercase: `lowercase`,
	capitalize: `capitalize`,
};

export const StyleTitle = styled(Title)<IProps>`
	&.ant-typography {
		text-transform: ${({ $textTransform }) => transforms[$textTransform]};
		${({ $variant }) => cssTitleVariant[$variant]}
	}
`;
