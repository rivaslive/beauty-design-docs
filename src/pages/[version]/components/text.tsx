import React from 'react';
import Head from 'next/head';
import { Col, Row } from 'antd';
import { GetStaticProps } from 'next';

// utils
import { getIdComponent } from 'utils/getIdComponent';
import { getStaticsPropsComponent } from 'utils/getServerSide';

// components
import Layout from 'components/Molecules/Layout';
import Title from 'components/Atoms/Title';
import Text from 'components/Atoms/Text';
import { BlockCode } from 'components/Atoms/Code';
import Example from 'components/Molecules/Example/Example';
import Table from 'components/Molecules/Table/Table';
import BuildingPage from 'components/Organisms/BuildingPage';


const TextPage = ({ data }: PageProps) => {
	if (!data) return <BuildingPage />;
	return (
		<>
			<Head>
				<title>Text - Wano UI</title>
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
