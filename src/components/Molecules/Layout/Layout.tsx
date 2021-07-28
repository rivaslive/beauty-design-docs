import React, { useState } from "react";
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
import MenuPages from './Menu';

interface IProps {
	children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
	const [selectedKey, setSelectedKey] = useState('get-started');
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
					<StyleAsideFooter>
						Copyright &copy;
					</StyleAsideFooter>
				</StyleSider>
				<StyleContent>{children}</StyleContent>
			</StyleLayout>
		</StyleLayout>
	);
};

export default React.memo(Layout);
