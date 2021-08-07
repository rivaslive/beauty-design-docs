import React, { useState } from 'react';
import { useRouter } from 'next/router';

// menu
import * as menuData from 'assets/menu';

// styles
import {
	StyleAsideFooter,
	StyleContent,
	StyleLayout,
	StyleSider,
} from './style';
import MenuPages from './Menu';
import Navbar from './Navbar';

interface IProps {
	children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
	const { pathname, query } = useRouter();
	const version = query?.version;
	const [selectedKey, setSelectedKey] = useState('get-started');

	React.useEffect(() => {
		if (version) {
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
			<Navbar />
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
