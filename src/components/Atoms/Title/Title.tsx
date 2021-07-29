import React from 'react';
import { LinkOutlined } from '@ant-design/icons';
import Link from 'next/link';

// styles
import { ITitleProps, StyleLink, StyleTitle, StyleTitleContent } from './style';

const Title = ({
	children,
	isLink = false,
	variant = 'ROBOT_28_39_400',
	color = '',
	textTransform = 'none',
	...rest
}: ITitleProps) => {
	if (isLink) {
		const onClick = () => {
			const { origin, pathname } = location;
			const ref = `${children}`.split(' ').join('-');
			return navigator.clipboard.writeText(`${origin}${pathname}#${ref}`);
		};
		return (
			<StyleTitleContent>
				<Link href={`#${children}`.split(' ').join('-')} passHref>
					<a>
						<StyleTitle
							level={2}
							$color={color}
							$variant={variant}
							$textTransform={textTransform}
							{...rest}
						>
							{children}
						</StyleTitle>
					</a>
				</Link>
				<StyleLink onClick={onClick}>
					<LinkOutlined />
				</StyleLink>
			</StyleTitleContent>
		);
	}

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
