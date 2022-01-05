import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// utils
import { getIdComponent } from 'utils/getIdComponent';

// menu
import * as menuData from 'assets/menu';

// components
import AlertBanner from 'components/Atoms/AlertBanner';
import GlobalStyle from 'styles/general';
import { ThemeProvider } from 'styled-components';
import Navbar from './Navbar';

// styles
import {
	ActiveStyle,
	StyleAsideFooter,
	StyleBody,
	StyleContent,
	StyleIndice,
	StyleIndiceElement,
	StyleLayout,
	StyleSider,
	StyleSpace,
} from './style';

const MenuPages = dynamic(() => import('./Menu'), { ssr: false });

type VersionType = keyof typeof menuData;

interface ElementProps {
	id: string;
	title: string;
}

interface IProps {
	children: React.ReactNode;
	noIndice?: boolean;
	data?: {
		howToUse?: string;
		ejemplos: ElementProps[];
		apis: ElementProps[];
	};
}

const defaultData = { ejemplos: [], apis: [] };

const Layout = ({ children, noIndice = false, data = defaultData }: IProps) => {
	const { pathname, query, asPath } = useRouter();
	const version = query?.version;
	const component = query?.component;
	const [selectedKey, setSelectedKey] = useState<string>('get-started');
	const [selectIndice, setSelectedIndice] = useState<string>('');
	const [collapseClass, setCollapseClass] = useState<string>('');

	const onCollapse = (collapsed: boolean) => {
		const newClass = collapsed ? 'collapsed' : '';
		setCollapseClass(newClass);
	};

	const indiceList = useMemo(() => {
		const apis = data?.apis?.length ? [{ id: 'api', title: 'API' }] : [];
		const out = [
			...(data?.ejemplos?.filter((f) => f.title) || []),
			...apis,
			...(data?.apis?.filter((f) => f.title) || []),
		]
		if (data.howToUse) {
			out.unshift({
				id: 'How-to-use?',
				title: 'How to use?'
			});
		}
		return out;
	}, [data]);

	React.useEffect(() => {
		if (version) {
			menuData[version as VersionType].map((item: any) => {
				item.children.map((c: any) => {
					const isActive = component === c.key || pathname.endsWith(c.key);
					if (isActive) {
						const content = document.querySelector('#content');
						content?.scrollTo({ top: 0, behavior: 'smooth' });
						setSelectedKey(c.key);
					}
				});
			});
		}
	}, [component, version, pathname]);

	React.useEffect(() => {
		indiceList.map((i) => {
			const title = getIdComponent(i.title);
			if (asPath.endsWith(`#${title}`)) {
				setSelectedIndice(i.title);
			}
		});
	}, [asPath, indiceList]);

	if (!version) return null;

	return (
		<ThemeProvider theme={{ isHome: false }}>
			<GlobalStyle />
			<StyleLayout>
				<AlertBanner
					message='Documentation still under construction, please do not hesitate to leave your comments. Blessings'
					banner
				/>
				<Navbar />
				<StyleLayout>
					{/* Aside */}
					<StyleSider
						width={250}
						theme='light'
						breakpoint='lg'
						collapsedWidth='0'
						onCollapse={onCollapse}
					>
						<MenuPages
							version={version}
							onSelectKey={setSelectedKey}
							selectedKey={selectedKey}
						/>
						<StyleAsideFooter>Copyright &copy;</StyleAsideFooter>
					</StyleSider>
					{/* End Aside */}

					<StyleContent id='content' className={collapseClass}>
						{/* content children */}
						<StyleBody>
							{children}
							<StyleSpace />
						</StyleBody>
						{/* end content children */}

						{/* Indice */}
						<StyleIndice>
							{!noIndice && indiceList.map((i, index) => (
								<Link
									passHref
									key={`indice-${index}`}
									href={`#${getIdComponent(i.title)}`}
								>
									<a>
										<StyleIndiceElement key={i.id}>
											{selectIndice === i.title && <ActiveStyle />}
											{i.title}
										</StyleIndiceElement>
									</a>
								</Link>
							))}
						</StyleIndice>
						{/* End Indice */}
					</StyleContent>
				</StyleLayout>
			</StyleLayout>
		</ThemeProvider>
	);
};

export default Layout;
