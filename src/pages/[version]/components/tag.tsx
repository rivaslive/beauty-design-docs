import React from 'react';
import Head from 'next/head';
import { Col, Row } from 'antd';

// utils
import { getIdComponent } from 'utils/getIdComponent';
import { getPathsComponent, getServerSideProps } from 'utils/getServerSide';

// components
import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import Layout from 'components/Molecules/Layout';
import { BlockCode } from 'components/Atoms/Code';
import Table from 'components/Molecules/Table/Table';
import Example from 'components/Molecules/Example/Example';
import BuildingPage from 'components/Organisms/BuildingPage';

const TagPage = ({ data }: PageProps) => {
	if (!data) return <BuildingPage />;
	return (
		<>
			<Head>
				<title>Tag - React Native Beauty UI</title>
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
				{/* WhyBeautyUI */}
				<Title id="Examples" variant="ROBOT_24_28_500" isLink>
					Examples
				</Title>
				<Row gutter={[20, 20]}>
					{data?.ejemplos &&
					data?.ejemplos?.map((example) => (
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
				{data?.apis &&
				data?.apis?.map((api) => (
					<Table
						key={api.id}
						title={api.title}
						items={api?.items || []}
						description={api.description}
					/>
				))}
			</Layout>
		</>
	);
};

// SERVER SIDE RENDERING https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
	return await getPathsComponent();
}

export async function getStaticProps({ params }: any) {
	return await getServerSideProps('Tag', params?.version || 'v1');
}

export default React.memo(TagPage);
