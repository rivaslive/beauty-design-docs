import React from 'react';
import Head from 'next/head';
import { Col, Row } from 'antd';

// utils
import { defaultName } from 'utils/defaultVersion';
import { getIdComponent } from 'utils/getIdComponent';

// components
import Text from 'components/Atoms/Text';
import Seo from 'components/Atoms/Seo/Seo';
import Title from 'components/Atoms/Title';
import { BlockCode } from 'components/Atoms/Code';
import Table from 'components/Molecules/Table/Table';
import Layout from 'components/Molecules/Layout/Layout';
import Example, { ImageFrame } from 'components/Molecules/Example/Example';

const ComponentTemplate = ({ data }: PageProps) => {
	return (
		<>
			<Seo title="Title"/>
			<Layout data={data}>
				{/* provider */}
				<Title level={1} variant="ROBOT_36_50_500">
					{data?.title}
				</Title>
				<Text variant="ROBOT_14_28_400" html={data?.description} />
				{/* How to use */}
				{data?.howToUse && (
					<>
						<br />
						<Title id="How-to-use?" variant="ROBOT_24_28_500" isLink>
							How to use?
						</Title>
						<Text variant="ROBOT_14_28_400" html={data.howToUse} />
					</>
				)}
				{/* Default code */}
				{data?.defaultCode && (
					<>
						<br />
						<BlockCode copy>{data?.defaultCode}</BlockCode>
					</>
				)}
				{/* default content */}
				{data?.image?.url && (
					<>
						<br />
						<Title id="what-i-can-do" variant="ROBOT_24_28_500" isLink>
							What I can do
						</Title>
						<Text variant="ROBOT_14_28_400">Basic tour of properties</Text>
						<ImageFrame
							image={data?.image?.url}
							style={{ margin: 0, marginBottom: 30 }}
						/>
					</>
				)}
				{/* WhyBeautyUI */}
				<Title id="Examples" variant="ROBOT_24_28_500" isLink>
					Examples
				</Title>
				<Row gutter={[20, 20]}>
					{data?.ejemplos &&
						data?.ejemplos?.map((example) => (
							<Col xs={24} md={12} key={example.id}>
								<Example
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

export default ComponentTemplate;
