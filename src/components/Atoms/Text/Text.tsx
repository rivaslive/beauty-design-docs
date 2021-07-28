import React from 'react';
import { ITextProps, StyleText } from './style';

const Text = ({
	children,
	variant = 'ROBOT_16_22_400',
	color = '',
	...rest
}: ITextProps) => {
	return (
		<StyleText $color={color} $variant={variant} {...rest}>
			{children}
		</StyleText>
	);
};

export default Text;
