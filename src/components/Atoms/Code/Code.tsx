import React from 'react';

// styles
import { StyleCode } from './style';

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
	copiable = true,
	code = true,
}: IProps) => {
	return (
		<StyleCode code={code} copyable={copiable}>
			{children}
		</StyleCode>
	);
};

export default Code;
