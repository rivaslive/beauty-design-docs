import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

export const menuData = [
	{
		key: 'started',
		name: 'Started',
		type: 'divider',
		children: [
			{
				key: 'getting-started',
				name: 'Getting started',
			},
		],
	},
	{
		key: 'general',
		type: 'divider',
		name: 'General',
		children: [
			{
				key: 'provider',
				name: 'Provider',
			},
			{
				key: 'title',
				name: 'Title',
			},
			{
				key: 'text',
				name: 'Text',
			},
			{
				key: 'button',
				name: 'Button',
			},
		],
	},
	{
		key: 'data-display',
		type: 'divider',
		name: 'Data Display',
		children: [
			{
				key: 'avatar',
				name: 'Avatar',
			},
			{
				key: 'badge',
				name: 'Badge',
			},
			{
				key: 'card',
				name: 'Card',
			},
			{
				key: 'carousel',
				name: 'Carousel',
			},
			{
				key: 'comment',
				name: 'Comment',
			},
			{
				key: 'image',
				name: 'Image',
			},
			{
				key: 'tag',
				name: 'Tag',
			},
		],
	},
];

interface MenuPagesProps {
	selectedKey: string;
	onSelectKey: (k: string) => void;
}

const MenuPages = ({ selectedKey, onSelectKey }: MenuPagesProps) => {
	return (
		<Menu
			theme="light"
			mode="inline"
			onClick={({ key }) => onSelectKey(key)}
			selectedKeys={selectedKey ? [selectedKey] : undefined}
		>
			{menuData.map((menu) => {
				if (menu?.type === 'divider') {
					return (
						<Menu.ItemGroup key={menu.key} title={menu.name}>
							{menu?.children?.map((child) => (
								<Menu.Item key={child.key}>
									<Link href={`/v1/components/${child.key}`}>{child.name}</Link>
								</Menu.Item>
							))}
						</Menu.ItemGroup>
					);
				}
				return (
					<Menu.Item key={menu.key}>
						<Link href={`/v1/components/${menu.key}`}>{menu.name}</Link>
					</Menu.Item>
				);
			})}
		</Menu>
	);
};

export default React.memo(MenuPages);
