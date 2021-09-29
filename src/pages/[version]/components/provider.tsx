import React from 'react';
import marked from 'marked';
import Head from 'next/head';
import { Col, Row } from 'antd';
import { GetStaticProps } from 'next';

import { defaultName } from 'utils/defaultVersion';
import { getIdComponent } from 'utils/getIdComponent';
import { getStaticsPropsComponent } from 'utils/getServerSide';

// components
import Layout from 'components/Molecules/Layout';
import Title from 'components/Atoms/Title';
import Text from 'components/Atoms/Text';
import { BlockCode } from 'components/Atoms/Code';
import Table from 'components/Molecules/Table';
import Example from 'components/Molecules/Example';
import BuildingPage from 'components/Organisms/BuildingPage';

const ProviderPage = ({ data }: PageProps) => {
	if (!data) return <BuildingPage />;
	return (
		<>
			<Head>
				<title>Provider - {defaultName}</title>
			</Head>
			<Layout>
				{/* provider */}
				<Title variant="ROBOT_36_50_500">{data?.title}</Title>
				<Text variant="ROBOT_14_28_400" html={data?.description} />
				<br />
				{/* How to use */}
				{data?.howToUse && (
					<>
						<Title id="How-to-use?" variant="ROBOT_24_28_500" isLink>
							How to use?
						</Title>
						<Text variant="ROBOT_14_28_400" html={data.howToUse} />
					</>
				)}
				<br />
				{data?.defaultCode && <BlockCode>{data?.defaultCode}</BlockCode>} <br />
				<br />
				{/* WhyBeautyUI */}
				<Title id="Examples" variant="ROBOT_24_28_500" isLink>
					Examples
				</Title>
				<Row gutter={[20, 20]}>
					{data?.ejemplos?.map((example) => (
						<Col xs={24} md={12}>
							<Example
								key={example.id}
								id={getIdComponent(example.title)}
								image={example?.imagen?.url}
								title={example.title}
								summary={example.description}
								code={example.code}
							/>
						</Col>
					))}
				</Row>
				<br />
				{/* Api */}
				<Title id="API" variant="ROBOT_24_28_500" isLink>
					API
				</Title>
				<br />
				{data?.apis?.map((api) => (
					<Table
						key={api.id}
						title={api.title}
						items={api?.items || []}
						description={marked(api.description)}
					/>
				))}
			</Layout>
		</>
	);
};

// SERVER SIDE RENDERING https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	return await getStaticsPropsComponent('Provider', params?.version || 'v1');
};

export default React.memo(ProviderPage);
