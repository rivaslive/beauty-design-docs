import React, { useState } from 'react';
import { useRouter } from 'next/router';

// menu
import * as menuData from 'assets/menu';

// components
import AlertBanner from 'components/Atoms/AlertBanner';
import GlobalStyle from 'styles/general';
import MenuPages from './Menu';
import Navbar from './Navbar';

// styles
import {
	StyleAsideFooter,
	StyleContent,
	StyleLayout,
	StyleSider,
} from './style';

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
			<GlobalStyle $isHome={false}/>
			<AlertBanner
				message="Documentation still under construction, please do not hesitate to leave your comments. Blessings"
				banner
			/>
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
