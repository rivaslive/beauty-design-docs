import React, { useState } from 'react';
import Copy from 'copy-to-clipboard';
import { Button } from 'antd';
import { CheckCircleTwoTone, CopyOutlined } from '@ant-design/icons';
import Highlight from 'react-highlight'
/*import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';*/

interface IProps {
	children?: React.ReactNode;
	copiable?: boolean;
	code?: boolean;
	copy?: boolean;
	background?: string;
	wrapLines?: boolean;
	showLineNumbers?: boolean;
}

const BlockCode = ({
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
		<div className="block-code">
			<Highlight
				// wrapLines={wrapLines}
				// customStyle={{ background }}
				// showLineNumbers={showLineNumbers}
				className="language-typescript"
				// style={vscDarkPlus}
			>
				{children}
			</Highlight>
			{copy && (
				<Button
					className="block-code__copy"
					onClick={onCopy}
					title="Copy"
					shape="circle"
					icon={
						clicB ? (
							<CheckCircleTwoTone twoToneColor="#52c41a" />
						) : (
							<CopyOutlined />
						)
					}
				/>
			)}
		</div>
	);
};

export default React.memo(BlockCode);
