import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

// styles
import { StyleCode } from './style';

interface IProps {
	children?: React.ReactNode;
	copiable?: boolean;
	code?: boolean;
}

const Code = ({ copiable = true, code = true, children }: IProps) => {
	return (
		<StyleCode code={code} copyable={copiable}>
			{children}
		</StyleCode>
	);
};

export const BlockCode = ({ children }: IProps) => {
	return (
		<SyntaxHighlighter
			wrapLines
			showLineNumbers
			language="typescript"
			customStyle={{ background: 'rgba(150,150,150,.1)' }}
			style={a11yLight}
		>
			{children}
		</SyntaxHighlighter>
	);
};

export default React.memo(Code);
