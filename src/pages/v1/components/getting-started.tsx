import React from 'react';
import Lottie from 'react-lottie';
import GetStart from 'assets/v1/lotties/get-started.json';

// components
import Layout from 'components/Molecules/Layout';
import Title from 'components/Atoms/Title';
import Text from 'components/Atoms/Text';
import Code, { BlockCode } from 'components/Atoms/Code';
import NextStep from 'components/Molecules/NextStep';

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
			<Title variant="ROBOT_36_50_500">Getting Started</Title>
			<Text
				variant="ROBOT_14_28_400"
				html={`<b>react-native-beauty-ui</b> is a library of UI components for React Native, compatible in Expo as React Native CLI, in this package you will find many elements created so that you can use them instantly, the main objective was always to offer a range of components that can be reused and that have an incredible design, I hope you like it.`}
			/>

			{/* animation */}
			<Lottie
				width={350}
				height={250}
				style={{ maxWidth: '100%', margin: 0 }}
				options={{
					loop: true,
					autoplay: true,
					animationData: GetStart,
					rendererSettings: {
						preserveAspectRatio: 'xMidYMid slice',
					},
				}}
			/>
			{/* end animation */}

			<br />
			<Title variant="ROBOT_24_28_500">Installation</Title>
			<Text
				variant="ROBOT_14_28_400"
				html={`For installation only run the next command in console:`}
			/>
			<br />
			<Code>yarn add react-native-beauty-ui</Code>
			<br />
			<Text variant="ROBOT_14_28_400" html={`Or`} />
			<br />
			<Code>npm i react-native-beauty-ui</Code>
			<br />
			<br />
			<Title variant="ROBOT_24_28_500">Provider(Required):</Title>
			<Text
				variant="ROBOT_14_28_400"
				html={`The provider is a mandatory component that must be at the highest possible level of your application, before using any other component of <b>beauty-ui</b>.`}
			/>
			<br />
			<Code code={false} copiable={false}>
				<b>App.tsx</b>
			</Code>
			<BlockCode>{code}</BlockCode>
			<br />
			<Title variant="ROBOT_24_28_500">Next step:</Title>
			<Text
				variant="ROBOT_14_28_400"
				html={`It is advisable to correctly configure the provider to have the maximum customization of the library.`}
			/>
			<br />
			<NextStep
				title="Provider"
				summary="Config provider"
				href="/v1/components/provider"
			/>
			<br />
			<br />
			<br />
		</Layout>
	);
};

export default React.memo(GettingStartedPage);
