import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

import * as menuData from 'assets/menu';

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
							<Link href={`/${version}/components/${menu.key}`}>{menu.name}</Link>
						</Menu.Item>
					);
				})
			}
		</Menu>
	);
};

export default React.memo(MenuPages);
