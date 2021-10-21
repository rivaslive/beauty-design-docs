import React from 'react';
import { GetStaticProps } from 'next';

// utils
import { getStaticsPropsComponent } from 'utils/getServerSide';

// components
import Text from 'components/Atoms/Text';
import BuildingPage from 'components/Organisms/BuildingPage';
import ComponentTemplate from 'components/Templates/ComponentTemplate';

const TextPage = (props: PageProps) => {
	if (!props?.data) return <BuildingPage />;

	return <ComponentTemplate {...props}/>;
};

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	return await getStaticsPropsComponent('Text', params?.version || 'v1');
};

export default React.memo(TextPage);
