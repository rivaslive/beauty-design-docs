import 'antd/dist/antd.css';
import 'animate.css/animate.css';
import 'slick-carousel/slick/slick.css';

import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';

// apollo
import { useApollo } from 'apollo/config';

// Global styles
import GlobalStyle from 'styles/general';

function MyApp({ Component, pageProps }: AppProps) {
	const client = useApollo(pageProps.initialApolloState);
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<title>react-native-beauty-ui</title>
			</Head>
			<ApolloProvider client={client}>
				<ConfigProvider locale={enUS}>
					<Component {...pageProps} />
				</ConfigProvider>
			</ApolloProvider>
			<GlobalStyle />
		</>
	);
}

export default MyApp;
