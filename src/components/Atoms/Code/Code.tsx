import React, { useState } from 'react';
import { CheckCircleTwoTone, CopyOutlined } from '@ant-design/icons';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Copy from 'copy-to-clipboard';

// styles
import { StyleButtonCopy, StyleCode, WrapperStyle } from './style';

interface IProps {
	children?: React.ReactNode;
	copiable?: boolean;
	code?: boolean;
	copy?: boolean;
	background?: string;
	wrapLines?: boolean;
	showLineNumbers?: boolean;
}

const Code = ({
	children,
	copy = false,
	copiable = true,
	code = true,
}: IProps) => {
	return (
		<StyleCode code={code} copyable={copiable}>
			{children}
		</StyleCode>
	);
};

export const BlockCode = ({
	children,
	copy = false,
	background = 'rgb(54,54,75)',
	showLineNumbers = true,
	wrapLines = true,
}: IProps) => {
	const [clicB, setClicB] = useState(false);

	const onCopy = () => {
		if (clicB) {
			return setClicB((prev) => !prev);
		}
		const c = Copy(
			typeof children === 'string'
				? children
				: 'Error the copy text in Beauty Design',
		);
		c && setClicB((prev) => !prev);
	};

	return (
		<WrapperStyle>
			<SyntaxHighlighter
				wrapLines={wrapLines}
				customStyle={{ background }}
				showLineNumbers={showLineNumbers}
				language="tsx"
				style={vscDarkPlus}
			>
				{children}
			</SyntaxHighlighter>
			{copy && (
				<StyleButtonCopy
					onClick={onCopy}
					title="Copy"
					shape="circle"
					icon={clicB ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CopyOutlined />}
				/>
			)}
		</WrapperStyle>
	);
};

export default React.memo(Code);
