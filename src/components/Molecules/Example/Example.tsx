import React from 'react';
import { Button, Space, Tooltip } from 'antd';
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
	StyleSecondSection,
	StyleShowCode,
	StyleTitle,
} from './style';

interface IProps {
	image: string;
	title: string;
	summary: string;
	code: string;

	[key: string]: unknown;
}

const Example = ({ id, title, summary, code, image, ...rest }: IProps) => {
	const [showCode, setShowCode] = React.useState<boolean>(false);

	const showCodeFunc = () => setShowCode((prev) => !prev);

	return (
		<StyleExample {...rest}>
			<StyleFirstSection>
				<Imagen width={300} height={450} src={image} />
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
					<Tooltip title="Code Snack">
						<Button type="link" icon={<CodeSandboxOutlined />} />
					</Tooltip>
					<Tooltip title="Copy code">
						<Button type="link" icon={<CopyOutlined />} />
					</Tooltip>
					<Tooltip title="Show code">
						<Button type="link" onClick={showCodeFunc} icon={<EyeOutlined />} />
					</Tooltip>
				</Space>
			</StyleFooter>
			{showCode && (
				<StyleShowCode>
					<BlockCode showLineNumbers={false} background="white">
						{code}
					</BlockCode>
				</StyleShowCode>
			)}
		</StyleExample>
	);
};

export default React.memo(Example);
