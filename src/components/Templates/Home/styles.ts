import { Layout, Alert } from 'antd';
import styled from 'styled-components';
import { mediaQueries } from '../../../styles/theme/theme';

export const StyleHome = styled(Layout)``;

export const StyleContent = styled(Layout.Content)`
	padding: 0;
	background: white;
	scroll-behavior: smooth;
	margin-top: -65px;
`;

export const StyleAlert = styled(Alert)`
	&.ant-alert {
		text-align: left;
		flex-wrap: wrap;
		z-index: 5;

		${mediaQueries.minTablet} {
			text-align: center;
			justify-content: center;
		}

		.anticon {
			text-align: center;
		}

		.ant-alert-content {
			max-width: calc(100% - 40px);
			flex: none;
		}
	}
`;
