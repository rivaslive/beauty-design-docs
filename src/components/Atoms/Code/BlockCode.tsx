import React, { useRef, useState } from 'react';
import Copy from 'copy-to-clipboard';
import { Button } from 'antd';
import { CheckCircleTwoTone, CopyOutlined } from '@ant-design/icons';
import hljs from 'highlight.js';

interface IProps {
	children?: string;
	copy?: boolean;
	language?: string
}

const BlockCode = ({ children, copy = true, language = 'typescript' }: IProps) => {
	const ref = useRef<HTMLPreElement>(null);
	const [textCopy, setTextCopy] = useState('');
	const [clicB, setClicB] = useState(false);

	const timeFunc = () => {
		return setTimeout(() => {
			setTextCopy('');
			setClicB(false);
		}, 5000);
	};

	const onCopy = () => {
		if (clicB) {
			clearTimeout(timeFunc());
			setTextCopy('');
			return setClicB((prev) => !prev);
		}
		const c = Copy(
			typeof children === 'string'
				? children
				: 'Error the copy text in Beauty Design',
		);
		if (c) {
			setClicB(true);
			setTextCopy('Copied!');
			timeFunc();
		}
	};

	// const html = React.useMemo(() => {
	// 	if (children) {
	// 		return hljs.highlight(children, {
	// 			language: 'typescript',
	// 		}).value;
	// 	}
	// 	return '';
	// }, [children]);

	React.useEffect(() => {
		const nodes = ref?.current?.querySelectorAll('pre code');
		if (nodes) {
			for (let i = 0; i < nodes?.length; i++) {
				hljs.highlightElement(nodes[i] as HTMLElement);
			}
		}
	}, []);

	return (
		<div className="block-code">
			<pre ref={ref}>
				<code
					className="language-typescript"
				>{children}</code>
			</pre>
			{copy && (
				<Button
					title="Copy"
					onClick={onCopy}
					className="block-code__copy"
					shape="round"
					icon={
						clicB ? (
							<CheckCircleTwoTone twoToneColor="#52c41a" />
						) : (
							<CopyOutlined />
						)
					}
				>
					{textCopy}
				</Button>
			)}
		</div>
	);
};

export default BlockCode;
