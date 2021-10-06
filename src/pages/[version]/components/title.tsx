import React from 'react';
import Head from 'next/head';
import { Col, Row } from 'antd';
import { GetStaticProps } from 'next';

// utils
import { defaultName } from 'utils/defaultVersion';
import { getIdComponent } from 'utils/getIdComponent';
import { getStaticsPropsComponent } from 'utils/getServerSide';

// components
import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import Layout from 'components/Molecules/Layout';
import { BlockCode } from 'components/Atoms/Code';
import Table from 'components/Molecules/Table/Table';
import Example, { ImageFrame } from 'components/Molecules/Example/Example';
import BuildingPage from 'components/Organisms/BuildingPage';

const TitlePage = ({ data }: PageProps) => {
	if (!data) return <BuildingPage />;
	return (
		<>
			<Head>
				<title>Title - {defaultName}</title>
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
				{/* Default code */}
				{data?.defaultCode && <BlockCode>{data?.defaultCode}</BlockCode>} <br />
				{/* default content */}
				{data?.image?.url && (
					<>
						<Title id="what-i-can-do" variant="ROBOT_24_28_500" isLink>
							What I can do
						</Title>
						<Text variant="ROBOT_14_28_400">basic tour of properties</Text>
						<ImageFrame image={data?.image?.url} style={{ margin: 0, marginBottom: 30 }} />
					</>
				)}
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
									code={example.code}
									title={example.title}
									snack={example.snack}
									image={example?.imagen?.url}
									summary={example.description}
									id={getIdComponent(example.title)}
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
	return {
		paths: [],
		fallback: true,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	return await getStaticsPropsComponent('Title', params?.version || 'v1');
};

export default React.memo(TitlePage);
