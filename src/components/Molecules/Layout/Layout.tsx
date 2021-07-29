import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { GithubOutlined } from '@ant-design/icons';

// styles
import {
	ButtonGithub,
	StyleAsideFooter,
	StyleContent,
	StyleHead,
	StyleInputSearch,
	StyleLayout,
	StyleSider,
	StyleTitle,
} from './style';
import MenuPages, { menuData } from './Menu';

interface IProps {
	children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
	const { pathname } = useRouter();
	const [selectedKey, setSelectedKey] = useState('get-started');

	React.useEffect(() => {
		menuData.map((item) => {
			item.children.map((c) => {
				const isActive = pathname.endsWith(c.key);
				if (isActive) {
					setSelectedKey(c.key);
				}
			});
		});
	}, [pathname]);

	return (
		<StyleLayout>
			<StyleHead theme="light">
				<StyleTitle variant="ROBOT_24_28_500">Beauty UI</StyleTitle>
				<StyleInputSearch placeholder="Search..." bordered={false} />
				<ButtonGithub type="link">
					<StyleTitle variant="ROBOT_24_28_500">
						<GithubOutlined /> Github
					</StyleTitle>
				</ButtonGithub>
			</StyleHead>
			<StyleLayout>
				<StyleSider
					width={250}
					theme="light"
					breakpoint="lg"
					collapsedWidth="0"
				>
					<MenuPages onSelectKey={setSelectedKey} selectedKey={selectedKey} />
					<StyleAsideFooter>Copyright &copy;</StyleAsideFooter>
				</StyleSider>
				<StyleContent>{children}</StyleContent>
			</StyleLayout>
		</StyleLayout>
	);
};

export default React.memo(Layout);
