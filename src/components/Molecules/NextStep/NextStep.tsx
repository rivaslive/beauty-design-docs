import React from 'react';
import Link from 'next/link';
import { ArrowRightOutlined } from '@ant-design/icons';

// components
import Text from 'components/Atoms/Text';

// styles
import { StyleContent, StyleIcon, StyleNext, StyleTitle } from './style';

interface IProps {
	href: string;
	title: string;
	summary?: string;
}

const NextStep = ({ href, title, summary }: IProps) => {
	return (
		<Link href={href}>
			<StyleNext>
				<StyleContent>
					<div>
						<StyleTitle variant="ROBOT_24_28_500">{title}</StyleTitle>
						<Text variant="ROBOT_14_28_400">{summary}</Text>
					</div>
					<StyleIcon>
						<ArrowRightOutlined />
					</StyleIcon>
				</StyleContent>
			</StyleNext>
		</Link>
	);
};

export default NextStep;
