import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

// menu
import * as menuData from 'assets/menu';

// components
import Button from 'components/Atoms/Button';

// styles
import { StyleMenuHome, StyleMenuHomeItem } from './style';

interface MenuPagesProps {
	selectedKey: string;
	version?: string | any;
	onSelectKey: (k: string) => void;
}

const MenuPages = ({ selectedKey, version, onSelectKey }: MenuPagesProps) => {
	if (!version) return null;
	return (
		<Menu
			theme="light"
			mode="inline"
			onClick={({ key }) => onSelectKey(key)}
			selectedKeys={selectedKey ? [selectedKey] : undefined}
		>
			{
				// @ts-ignore
				menuData[version].map((menu: any) => {
					if (menu?.type === 'divider') {
						return (
							<Menu.ItemGroup key={menu.key} title={menu.name}>
								{menu?.children?.map((child: any) => (
									<Menu.Item key={child.key}>
										<Link href={`/${version}/components/${child.key}`}>
											{child.name}
										</Link>
									</Menu.Item>
								))}
							</Menu.ItemGroup>
						);
					}
					return (
						<Menu.Item key={menu.key}>
							<Link href={`/${version}/components/${menu.key}`}>
								{menu.name}
							</Link>
						</Menu.Item>
					);
				})
			}
		</Menu>
	);
};

export const MenuHome = ({ items }: any) => {
	const last = items?.length - 1 || 0;
	return (
		<>
			<StyleMenuHome mode="horizontal">
				{items.map((i: any, index: number) => {
					if (last === index) return null;
					if (i.key === 'documentation') {
						return (
							<StyleMenuHomeItem key={i.key}>
								<a href={i?.href}>{i.name}</a>
							</StyleMenuHomeItem>
						);
					}
					return (
						<StyleMenuHomeItem key={i.key}>
							<Link href={i?.href ? i.href : `#${i.key}`}>{i.name}</Link>
						</StyleMenuHomeItem>
					);
				})}
			</StyleMenuHome>
			{items && items?.length && (
				<Button variant="LANDING_CONTACT_DARK">
					{
						<Link
							href={
								items[last]?.href ? items[last].href : `#${items[last].key}`
							}
						>
							{items[last].name}
						</Link>
					}
				</Button>
			)}
		</>
	);
};

export default React.memo(MenuPages);
