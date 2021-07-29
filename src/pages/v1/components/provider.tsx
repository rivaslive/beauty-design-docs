import React from 'react';

// components
import Layout from 'components/Molecules/Layout';
import Title from 'components/Atoms/Title';
import Text from 'components/Atoms/Text';
import { BlockCode } from 'components/Atoms/Code';
import Table from 'components/Molecules/Table';
import { providerAPI } from 'mock/v1/provider';

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
			<Title variant="ROBOT_36_50_500">Provider</Title>
			<Text
				variant="ROBOT_14_28_400"
				html={`The provider is a mandatory component that must be at the highest possible level of your application, before using any other component of beauty-ui`}
			/>

			<br />
			<Title id="How-to-use?" variant="ROBOT_24_28_500" isLink>How to use?</Title>
			<Text
				variant="ROBOT_14_28_400"
				html={`You can import the component at the top level of your application`}
			/>
			<br />
			<BlockCode>{code}</BlockCode>
			<br />
			<Title id="API" variant="ROBOT_24_28_500" isLink>API</Title>
			<br />
			<Table items={providerAPI}/>
		</Layout>
	);
};

export default React.memo(GettingStartedPage);
