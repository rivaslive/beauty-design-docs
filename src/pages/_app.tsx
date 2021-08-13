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

function MyApp({ Component, pageProps }: AppProps) {
	const client = useApollo(pageProps.initialApolloState);
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<title>React Native Beauty UI</title>
			</Head>
			<ApolloProvider client={client}>
				<ConfigProvider locale={enUS}>
					<Component {...pageProps} />
				</ConfigProvider>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
