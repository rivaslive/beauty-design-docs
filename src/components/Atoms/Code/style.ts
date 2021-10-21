import styled from 'styled-components';
import { Button, Typography } from 'antd';

const { Text } = Typography;

export const StyleCode = styled(Text)`
	display: block;
	code {
		padding: 10px 20px;
	}
`;

export const WrapperStyle = styled.div`
	position: relative;
`

export const StyleButtonCopy = styled(Button)`
	position: absolute;
	top: 10px;
	right: 10px;
	background-color: rgba(255, 255, 255, 0.1);
	border: none;

	.anticon {
		color: #eaeaea;
	}

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
		border: none;
		opacity: 0.7;
	}

	&:focus,
	&:active {
		background-color: rgba(255, 255, 255, 0.1);
		border: none;
		opacity: 1;
	}
`
