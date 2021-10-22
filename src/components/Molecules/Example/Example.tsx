import React from 'react';
import { Space } from 'antd';
import { CodeSandboxOutlined, EyeOutlined } from '@ant-design/icons';

// components
import Imagen from 'components/Atoms/Imagen';
import Title from 'components/Atoms/Title';
import { BlockCode } from 'components/Atoms/Code';
import Text from 'components/Atoms/Text';
import Tooltip from 'components/Atoms/Tooltip';

// styles
import {
	StyleExample,
	StyleFirstSection,
	StyleFooter,
	StyleFrameImage,
	StyleSecondSection,
	StyleShowCode,
	StyleTitle,
} from './style';

interface IProps {
	image: string;
	title: string;
	summary: string;
	code: string;
	snack?: string;

	[key: string]: unknown;
}

export const ImageFrame = ({
	image,
	style,
}: {
	image: string;
	style?: React.CSSProperties;
}) => {
	return (
		<StyleFrameImage style={style}>
			<Imagen className="img" src={image} />
		</StyleFrameImage>
	);
};

const Example = ({ title, summary, code, image, snack, ...rest }: IProps) => {
	const [showCode, setShowCode] = React.useState<boolean>(false);

	const showCodeFunc = () => {
		setShowCode((prev) => !prev);
	};

	const openSnack = () => {
		window.open(snack, '_blank');
	};

	return (
		<StyleExample {...rest}>
			<StyleFirstSection>
				<ImageFrame image={image} />
			</StyleFirstSection>
			<StyleSecondSection>
				<StyleTitle>
					<Title textTransform="capitalize" className="title" isLink variant="ROBOT_24_28_500">
						{title}
					</Title>
				</StyleTitle>
				<Text variant="ROBOT_14_28_400" html={summary} />
			</StyleSecondSection>
			<StyleFooter>
				<Space>
					{snack && (
						<Tooltip
							text="Snack"
							title="Code Snack"
							onClick={openSnack}
							icon={<CodeSandboxOutlined />}
						/>
					)}
					<Tooltip
						text="Code"
						active={showCode}
						title="Show code"
						icon={<EyeOutlined />}
						onClick={showCodeFunc}
					/>
				</Space>
			</StyleFooter>
			{showCode && (
				<StyleShowCode>
					<BlockCode>{code}</BlockCode>
				</StyleShowCode>
			)}
		</StyleExample>
	);
};

export default React.memo(Example);
