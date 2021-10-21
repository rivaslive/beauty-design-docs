import React from 'react';
import { GetStaticProps } from 'next';

// utils
import { getStaticsPropsComponent } from 'utils/getServerSide';

// components
import BuildingPage from 'components/Organisms/BuildingPage';
import ComponentTemplate from 'components/Templates/ComponentTemplate';

const ButtonPage = (props: PageProps) => {
	if (!props?.data) return <BuildingPage />;

	return <ComponentTemplate {...props} />;
};

// SERVER SIDE RENDERING https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	return await getStaticsPropsComponent('Button', params?.version || 'v1');
};

export default React.memo(ButtonPage);
