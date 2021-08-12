import React from 'react';
import Head from 'next/head';
import { Col, Row } from 'antd';
import { gql } from '@apollo/client';

import { initializeApollo } from 'apollo/config';
import { GET_COMPONENT_VERSION } from 'graphql/component.query';

// components
import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import Layout from 'components/Molecules/Layout';
import { BlockCode } from 'components/Atoms/Code';
import Table from 'components/Molecules/Table/Table';
import { getIdComponent } from 'utils/getIdComponent';
import Example from 'components/Molecules/Example/Example';

const TitlePage = ({ data }: PageProps) => {
	if (!data) return null;
	return (
		<>
			<Head>
				<title>Provider - react-native-beauty-ui</title>
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
					WhyBeautyUI
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
	const client = initializeApollo();
	let paths = [];
	try {
		const { data } = await client.query({
			query: gql`
				query {
					versions {
						id
						version
					}
				}
			`,
		});

		paths = data.versions.map((v: any) => ({
			params: v,
		}));
	} catch (e) {
		console.log(e);
	}

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
	let res = null;
	const client = initializeApollo();
	// Call an external API endpoint to get posts
	try {
		const { data }: { data: IGraphComponentRes } = await client.query({
			query: GET_COMPONENT_VERSION,
			variables: {
				title: 'Title',
				version: params.version,
			},
		});

		if (data && data?.componentes) {
			if (data.componentes.length) {
				res = data.componentes[0];
			}
		}

		// By returning { props: { data } }, the component
		// will receive `data` as a prop at build time
		return {
			props: {
				data: res,
			},
		};
	} catch (e) {
		console.log(e);
		return {
			props: {
				data: null,
			},
		};
	}
}

export default React.memo(TitlePage);
