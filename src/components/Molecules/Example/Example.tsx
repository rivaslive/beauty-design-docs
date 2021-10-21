import React from 'react';
import copy from 'copy-to-clipboard';
import { Button, message, Space, Tooltip } from 'antd';
import {
	CodeSandboxOutlined,
	CopyOutlined,
	EyeOutlined,
} from '@ant-design/icons';

// components
import Imagen from 'components/Atoms/Imagen';
import Title from 'components/Atoms/Title';
import { BlockCode } from 'components/Atoms/Code';
import Text from 'components/Atoms/Text';

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

	const copyCode = () => {
		const c = copy(code);
		c && message.success('Copy successfully');
	};

	return (
		<StyleExample {...rest}>
			<StyleFirstSection>
				<ImageFrame image={image} />
			</StyleFirstSection>
			<StyleSecondSection>
				<StyleTitle>
					<Title className="title" isLink variant="ROBOT_24_28_500">
						{title}
					</Title>
				</StyleTitle>
				<Text variant="ROBOT_14_28_400">{summary}</Text>
			</StyleSecondSection>
			<StyleFooter>
				<Space>
					{snack && (
						<Tooltip title="Code Snack">
							<a href={snack} target="_blank" rel="noopener noreferrer">
								<Button type="link" icon={<CodeSandboxOutlined />} />
							</a>
						</Tooltip>
					)}
					<Tooltip title="Copy code">
						<Button onClick={copyCode} type="link" icon={<CopyOutlined />} />
					</Tooltip>
					<Tooltip title="Show code">
						<Button type="link" onClick={showCodeFunc} icon={<EyeOutlined />} />
					</Tooltip>
				</Space>
			</StyleFooter>
			{showCode && (
				<StyleShowCode>
					<BlockCode showLineNumbers={false}>
						{code}
					</BlockCode>
				</StyleShowCode>
			)}
		</StyleExample>
	);
};

export default React.memo(Example);
