import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

// menu
import * as menuData from 'assets/menu';

interface MenuPagesProps {
	selectedKey: string;
	version?: string | any;
	onSelectKey: (k: string) => void;
}

type VersionType = keyof typeof menuData;

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
				menuData[version as VersionType].map((menu: any) => {
					if (menu?.type === 'divider') {
						return (
							<Menu.ItemGroup key={menu.key} title={menu.name}>
								{menu?.children?.map((child: any) => {
									if (child.key === 'getting-started') {
										return (
											<Menu.Item key={child.key}>
												<Link href={`/${version}/${child.key}`} prefetch>
													{child.name}
												</Link>
											</Menu.Item>
										);
									} else {
										return (
											<Menu.Item key={child.key}>
												<Link href={`/${version}/components/${child.key}`} prefetch>
													{child.name}
												</Link>
											</Menu.Item>
										);
									}
								})}
							</Menu.ItemGroup>
						);
					}
					return (
						<Menu.Item key={menu.key}>
							<Link href={`/${version}/components/${menu.key}`} prefetch>
								{menu.name}
							</Link>
						</Menu.Item>
					);
				})
			}
		</Menu>
	);
};

export default MenuPages;
