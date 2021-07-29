import styled from 'styled-components';

// components
import { Button, Input, Layout } from 'antd';
import Title from 'components/Atoms/Title';

// styles
import { mediaQueries } from 'styles/theme/theme';

const { Header, Sider, Content } = Layout;

export const StyleLayout = styled(Layout)`
	overflow: hidden;
`;

export const StyleHead = styled(Header)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 100%;
	background: #fff;
	padding: 0 10px;
	box-shadow: 0 2px 8px #f0f1f2;
	z-index: 10;

	${mediaQueries.minTablet} {
		padding: 0 20px;
	}
`;

export const ButtonGithub = styled(Button)`
	margin: 0;
	padding: 0;
`;

export const StyleTitle = styled(Title)`
	&.ant-typography {
		margin-top: 0 !important;
		margin-bottom: 0;
	}
`;

export const StyleInputSearch = styled(Input)`
	display: none;
	width: 350px;
	max-width: 100%;
	border: 1px solid transparent;
	box-shadow: 0 2px 8px #f0f1f2;

	&:hover,
	&:active,
	&:focus {
		border: 1px solid #dadada;
		box-shadow: 0 2px 8px #f0f1f2;
	}

	${mediaQueries.minTablet} {
		display: block;
	}
`;

export const StyleSider = styled(Sider)`
	&.ant-layout-sider {
		.ant-layout-sider-children {
			height: calc(100vh - 64px);
			overflow-y: auto;

			&::-webkit-scrollbar {
				background-color: transparent;
				width: 8px;
			}

			&::-webkit-scrollbar-thumb {
				background-color: transparent;
			}

			&:hover {
				&::-webkit-scrollbar-thumb {
					background-color: #d9d9d9;
				}
			}
		}
	}

	.ant-menu-title-content {
		font-size: 14px;
	}

	.ant-menu-item-group-title {
		padding: 8px 16px;
		color: #00000073;
		margin-top: 16px;
		margin-bottom: 16px;
		padding-left: 25px !important;
		line-height: 1.5715;
		transition: all 0.3s;
		font-size: 13px;

		&:after {
			position: relative;
			top: 12px;
			display: block;
			width: calc(100% - 20px);
			height: 1px;
			background: #f0f0f0;
			content: '';
			transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
		}
	}
`;

export const StyleContent = styled(Content)`
	height: calc(100vh - 64px);
	flex: 0 0 100%;
	padding: 10px 10px 100px;
	background: white;
	overflow-y: auto;
	scroll-behavior: smooth;

	${mediaQueries.minTablet} {
		padding: 10px 20px 100px;
		flex: 0 0 calc(100% - 250px);
	}
`;

export const StyleAsideFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	height: 75px;
	width: 100%;
	background: rgba(100, 100, 100, 0.05);
	border-top: 1px solid #f0f0f0;
`;
