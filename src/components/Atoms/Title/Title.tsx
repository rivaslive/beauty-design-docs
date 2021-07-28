import React from 'react';
import { ITitleProps, StyleTitle } from './style';

const Title = ({
	children,
	variant = 'ROBOT_28_39_400',
	color = '',
	textTransform = 'none',
	...rest
}: ITitleProps) => {
	return (
		<StyleTitle
			level={2}
			$color={color}
			$variant={variant}
			$textTransform={textTransform}
			{...rest}
		>
			{children}
		</StyleTitle>
	);
};

export default Title;
