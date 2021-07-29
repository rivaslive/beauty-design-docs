import React from 'react';

// components
import Layout from 'components/Molecules/Layout';
import Title from 'components/Atoms/Title';
import Text from 'components/Atoms/Text';
import { BlockCode } from 'components/Atoms/Code';
import Table from 'components/Molecules/Table';
import { providerAPI } from 'mock/v1/provider';
import Example from 'components/Molecules/Example';
import { Col, Row } from 'antd';

const code = `import { UINativeProvider } from 'react-native-beauty-ui';

export default function App() {
  return (
    <UINativeProvider>
      ...
    </UINativeProvider>
  );
}`;

const GettingStartedPage = () => {
	return (
		<Layout>
			{/* provider */}
			<Title variant="ROBOT_36_50_500">Provider</Title>
			<Text
				variant="ROBOT_14_28_400"
				html={`The provider is a mandatory component that must be at the highest possible level of your application, before using any other component of beauty-ui`}
			/>
			<br />

			{/* How to use */}
			<Title id="How-to-use?" variant="ROBOT_24_28_500" isLink>How to use?</Title>
			<Text
				variant="ROBOT_14_28_400"
				html={`You can import the component at the top level of your application`}
			/>
			<br />
			<BlockCode>{code}</BlockCode>
			<br />

			{/* Examples */}
			<Title id="Examples" variant="ROBOT_24_28_500" isLink>Examples</Title>
			<Row gutter={[20, 20]}>
				<Col xs={24} md={12}>
					<Example
						id='Default-Provider'
						image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/09804a82963291.5d308c3850e2c.gif"
						title="Default Provider"
						summary="Basic provider"
						code={code}
					/>
				</Col>
				<Col xs={24} md={12}>
					<Example
						id='Provider-with-custom-colors'
						image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/09804a82963291.5d308c3850e2c.gif"
						title="Provider with custom colors"
						summary="Change or add the colors theme in the provider"
						code={code}
					/>
				</Col>
			</Row>
			<br />

			{/* Api */}
			<Title id="API" variant="ROBOT_24_28_500" isLink>API</Title>
			<br />
			<Table items={providerAPI}/>
		</Layout>
	);
};

export default React.memo(GettingStartedPage);
