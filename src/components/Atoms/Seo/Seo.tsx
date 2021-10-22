import React from 'react';
import { NextSeo } from 'next-seo';

// utils
import { defaultName } from 'utils/defaultVersion';

interface SeoProps {
	title?: string;
	description?: string;
	canonical?: string;
	image?: string;
	altImage?: string;
	notDash?: boolean
}

const Seo = ({
	notDash = false,
	title = 'React Native',
	altImage = 'Beauty design',
	description = 'The best UI components library for React Native',
	canonical = 'https://www.beauty-design.app/',
	image = 'https://www.beauty-design.app/share.png',
}: SeoProps) => {
	const newTitle = `${title}${!notDash && ` -`} ${defaultName}`;
	return (
		<NextSeo
			title={newTitle}
			description={description}
			canonical={canonical}
			openGraph={{
				url: canonical,
				title: newTitle,
				description: description,
				images: [
					{
						url: image,
						width: 1366,
						height: 768,
						alt: altImage,
						type: 'image/png',
					},
				],
				site_name: altImage,
			}}
		/>
	);
};

export default Seo;
