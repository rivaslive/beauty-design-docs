import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// utils
import { defaultVersion } from 'utils/defaultVersion';

// components
import  Button from 'components/Atoms/Button/Button';
import brand from '../../../../public/brand.svg';

// styles
import {
	StyleBanner,
	StyleContentTitle,
	StyleCTA,
	StyleFirstSection,
	StyleImage,
	StyleText,
	StyleTitle,
} from './style';

interface IProps {}

const BannerHome = (props: IProps) => {
	return (
		<StyleFirstSection>
			<StyleContentTitle>
				<StyleImage className="animate__animated animate__fadeIn animate__delay-2s">
					<Image src={brand} width={200} height={200} objectFit="contain" />
				</StyleImage>
				<StyleTitle
					variant="POPPINS_70_77_800"
					className="animate__animated animate__fadeInUp animate__faster"
				>
					Best React Native framework UI
				</StyleTitle>
				<StyleText className="animate__animated animate__fadeIn animate__faster">
					react-native-beauty-ui offers a very nice and modern interface that
					allows you to create native applications quickly and beautifully
				</StyleText>
				<StyleCTA className="animate__animated animate__fadeIn animate__delay-2s">
					<Button className="getting" type="primary">
						<a href={`/${defaultVersion}/getting-started`}>
							Getting started
						</a>
					</Button>
				</StyleCTA>
			</StyleContentTitle>
			<StyleBanner />
		</StyleFirstSection>
	);
};

export default BannerHome;
