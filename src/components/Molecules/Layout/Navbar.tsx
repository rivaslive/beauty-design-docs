import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GithubOutlined } from '@ant-design/icons';

// brand
import Brand from '../../../../public/brand.svg';

// components
import {
	ButtonGithub,
	StyleBrand,
	StyleHead,
	StyleHeadContent,
	StyleInputSearch,
	StyleTitle,
} from './style';
import { MenuHome } from './Menu';

interface IProps {
	isHome?: boolean;
	isSolid?: boolean;
	menu?: {
		name: string;
		key: string;
	}[];
}

const Navbar = ({ isSolid = false, isHome = false, menu }: IProps) => {
	return (
		<StyleHead $isHome={isSolid} theme="light">
			<StyleHeadContent $isHome={isSolid}>
				<a href="/">
					<StyleBrand>
						<Image src={Brand} height={50} width={65} objectFit="contain" />
						<StyleTitle variant="ROBOT_24_28_500">Wano</StyleTitle>
					</StyleBrand>
				</a>
				{!isHome ? (
					<>
						<StyleInputSearch placeholder="Search..." bordered={false} />
						<ButtonGithub type="link">
							<StyleTitle variant="ROBOT_24_28_500">
								<GithubOutlined /> Github
							</StyleTitle>
						</ButtonGithub>
					</>
				) : (
					<MenuHome items={menu} />
				)}
			</StyleHeadContent>
		</StyleHead>
	);
};

export default React.memo(Navbar);
