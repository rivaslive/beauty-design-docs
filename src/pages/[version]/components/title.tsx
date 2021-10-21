import React from 'react';
import { GetStaticProps } from 'next';

// utils
import { getStaticsPropsComponent } from 'utils/getServerSide';

// components
import Title from 'components/Atoms/Title';
import BuildingPage from 'components/Organisms/BuildingPage';
import ComponentTemplate from 'components/Templates/ComponentTemplate';

const TitlePage = (props: PageProps) => {
	if (!props?.data) return <BuildingPage />;

	return <ComponentTemplate {...props}/>;
};

// SERVER SIDE RENDERING https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	return await getStaticsPropsComponent('Title', params?.version || 'v1');
};

export default React.memo(TitlePage);
