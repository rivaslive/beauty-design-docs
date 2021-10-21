import styled from 'styled-components';

// components
import { Button, Input, Layout, Menu } from 'antd';
import Title from 'components/Atoms/Title';

// styles
import { colors, mediaQueries } from 'styles/theme/theme';

const { Header, Sider, Content } = Layout;

export const StyleLayout = styled(Layout)`
	overflow: hidden;
`;

export const StyleHead = styled(Header)<{$isHome: boolean, $isHome2: boolean}>`
	position: ${({ $isHome }) => $isHome ? 'relative' : 'sticky'};
	background: ${({ $isHome }) => $isHome ? 'transparent' : '#fff'};
	box-shadow: ${({ $isHome }) => $isHome ? 'none' : '0 2px 8px #f0f1f2'};
	width: 100%;
	padding: ${({ $isHome2 }) => $isHome2 ? '0' : '10px 0'};
	top: 0;
	transition: all 350ms;
	z-index: 10;
`;

export const StyleHeadContent = styled.div<{$isHome: boolean}>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 5px 10px;

	${mediaQueries.minTablet} {
		padding: 5px 20px;
	}
`;

export const StyleBrand = styled.div`
		width: 100%;
		display: flex;
		align-items: center;
`;

export const ButtonGithub = styled(Button)`
	margin: 0;
	padding: 0;
`;

export const StyleTitle = styled(Title)`
	&.ant-typography {
		margin-top: 0 !important;
		margin-bottom: 0;
		font-size: 18px;

		${mediaQueries.minTablet} {
			font-size: 24px;
		}
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
			//height: calc(100vh - 64px);
			height: calc(100vh - 100px);
			overflow-y: auto;

			&::-webkit-scrollbar {
				background-color: transparent;
				border-radius: 4px;
				width: 5px;
			}

			&::-webkit-scrollbar-thumb {
				background-color: transparent;
			}

			&:hover {
				&::-webkit-scrollbar-thumb {
					background-color: #d9d9d9;
				}
			}

			.ant-menu.ant-menu-root {
				padding: 0 5px 0 10px;
			}

			.ant-menu-item {
				border-radius: 12px;
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

	.ant-menu-item.ant-menu-item-selected {
		background: rgba(2, 164, 157, 0.08);

		&:after {
			border-right: 3px solid ${colors.primary};
		}

		.ant-menu-title-content {
			* {
				color: ${colors.primary};
			}
		}
	}

	//Hover
	.ant-menu-item.ant-menu-item-active {
		.ant-menu-title-content {
			&:hover {
				* {
					color: ${colors.primary};
				}
			}
		}
	}
`;

export const StyleContent = styled(Content)`
	//height: calc(100vh - 64px);
	height: calc(100vh - 100px);
	flex: 0 0 100%;
	padding: 10px 10px 100px;
	background: white;
	overflow-y: auto;
	overflow-x: hidden;
	scroll-behavior: smooth;

	${mediaQueries.minTablet} {
		padding: 10px 20px 100px;
		flex: 0 0 calc(100% - 250px);
		transition: all 500ms;

		&.collapsed {
			transition: all 500ms;
			flex: 0 0 100%;
		}
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

export const StyleMenuHome = styled(Menu)`
	&.ant-menu {
		display: none;
		width: 475px;
		max-width: 100%;
		justify-content: flex-end;

		${mediaQueries.minTablet} {
			display: flex;
			justify-content: center;
			flex: 1;
		}

		&.ant-menu-horizontal {
			border-bottom: 0;
			background: transparent;

			.ant-menu-item {
				color: rgb(100, 100, 100);
				font-weight: 600;
			}

			.ant-menu-item.ant-menu-item-selected {
				&:after {
					border-color: ${colors.primaryDark};
				}

				.ant-menu-title-content {
					* {
						color: rgb(0, 0, 0);
					}
				}
			}


			//Hover
			.ant-menu-item.ant-menu-item-active {
				&:after {
					border-color: ${colors.primaryDark};
				}
				.ant-menu-title-content {
					&:hover {
						* {
							color: rgb(0, 0, 0);
						}
					}
				}
			}
		}
	}
`;

export const StyleMenuHomeItem = styled(Menu.Item)``;
