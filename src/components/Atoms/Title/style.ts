import { ReactNode } from 'react';
import { Button, Typography } from 'antd';
import styled, { css } from 'styled-components';
import { TitleProps } from 'antd/lib/typography/Title';
import { mediaQueries } from '../../../styles/theme/theme';

const { Title } = Typography;

export type VariantType =
	| 'ROBOT_28_39_400'
	| 'ROBOT_24_28_500'
	| 'ROBOT_36_50_500'
	| 'ROBOT_19_25_800'
	| 'ROBOT_40_44_800'
	| 'ROBOT_60_65_800'
	| 'ROBOT_70_77_800'
	| 'POPPINS_18_22_800'
	| 'POPPINS_19_25_800'
	| 'POPPINS_40_44_800'
	| 'POPPINS_60_65_800'
	| 'POPPINS_70_77_800';
export type TextTransformType =
	| 'uppercase'
	| 'lowercase'
	| 'capitalize'
	| 'none';

export interface ITitleProps extends TitleProps {
	variant?: VariantType;
	isLink?: boolean;
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
		// font-family: {fontNames.roboto};
		font-size: 28px;
		line-height: 39px;
		font-weight: 400;
	`,
	ROBOT_24_28_500: css`
		font-size: 24px;
		line-height: 28px;
		font-weight: 500;
	`,
	ROBOT_36_50_500: css`
		font-size: 36px;
		line-height: 50px;
		font-weight: 500;
	`,
	ROBOT_19_25_800: css`
		font-size: 19px;
		line-height: 25px;
		font-weight: 800;
	`,
	ROBOT_40_44_800: css`
		font-size: 40px;
		line-height: 44px;
		font-weight: 800;
	`,
	ROBOT_60_65_800: css`
		font-size: 60px;
		line-height: 65px;
		font-weight: 800;
	`,
	ROBOT_70_77_800: css`
		font-size: 70px;
		line-height: 70px;
		font-weight: 800;
	`,
	POPPINS_18_22_800: css`
		font-family: 'Poppins', sans-serif;
		font-size: 18px;
		line-height: 22px;
		font-weight: 800;
	`,
	POPPINS_19_25_800: css`
		font-family: 'Poppins', sans-serif;
		font-size: 19px;
		line-height: 25px;
		font-weight: 800;
	`,
	POPPINS_40_44_800: css`
		font-family: 'Poppins', sans-serif;
		font-size: 40px;
		line-height: 44px;
		font-weight: 800;
	`,
	POPPINS_60_65_800: css`
		font-family: 'Poppins', sans-serif;
		font-size: 60px;
		line-height: 65px;
		font-weight: 800;
	`,
	POPPINS_70_77_800: css`
		font-family: 'Poppins', sans-serif;
		font-size: 50px;
		line-height: 55px;
		font-weight: 800;

		${mediaQueries.minTablet} {
			font-size: 70px;
			line-height: 70px;
		}
	`,
};

const transforms = {
	none: `none`,
	uppercase: `uppercase`,
	lowercase: `lowercase`,
	capitalize: `capitalize`,
};

export const StyleTitleContent = styled.div`
	display: flex;
	scroll-margin-top: 30px;
`;

export const StyleLink = styled(Button)`
	padding: 0 0 0 5px;
	border: none;
	height: 0;
`;

export const StyleTitle = styled(Title)<IProps>`
	&.ant-typography {
		text-transform: ${({ $textTransform }) => transforms[$textTransform]};
		${({ $variant }) => cssTitleVariant[$variant]}
	}
`;
