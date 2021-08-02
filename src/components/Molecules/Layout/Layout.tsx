import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GithubOutlined } from '@ant-design/icons';

// menu
import * as menuData from 'assets/menu';
import Brand from '../../../../public/brand.svg';

// styles
import {
	ButtonGithub,
	StyleAsideFooter,
	StyleBrand,
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
	const { pathname, query } = useRouter();
	const version = query?.version;
	const [selectedKey, setSelectedKey] = useState('get-started');

	React.useEffect(() => {
		if (version) {
			console.log(version);
			// @ts-ignore
			menuData[version].map((item: any) => {
				item.children.map((c: any) => {
					const isActive = pathname.endsWith(c.key);
					if (isActive) {
						setSelectedKey(c.key);
					}
				});
			});
		}
	}, [pathname, version]);

	if (!version) return null;

	return (
		<StyleLayout>
			<StyleHead theme="light">
				<StyleBrand>
					<Image src={Brand} height={50} width={65} objectFit="contain" />
					<StyleTitle variant="ROBOT_24_28_500">Beauty UI</StyleTitle>
				</StyleBrand>
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
					<MenuPages
						version={version}
						onSelectKey={setSelectedKey}
						selectedKey={selectedKey}
					/>
					<StyleAsideFooter>Copyright &copy;</StyleAsideFooter>
				</StyleSider>
				<StyleContent>{children}</StyleContent>
			</StyleLayout>
		</StyleLayout>
	);
};

export default React.memo(Layout);
