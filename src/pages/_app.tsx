import 'antd/dist/antd.css';
import 'animate.css/animate.css';
import 'slick-carousel/slick/slick.css';
import 'highlight.js/styles/atom-one-dark.css';

import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd';
import { useRouter } from 'next/router';
import enUS from 'antd/lib/locale/en_US';
import * as ga from 'lib/ga';

// apollo
import { useApollo } from 'apollo/config';

// components
import NProgress from 'components/Atoms/NProgress';
import Seo from 'components/Atoms/Seo/Seo';

function MyApp({ Component, pageProps }: AppProps) {
	const client = useApollo(pageProps.initialApolloState);
	const router = useRouter();

	React.useEffect(() => {
		const handleRouteChange = (url: string) => {
			ga.pageView(url);
		};
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on('routeChangeComplete', handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<title>Beauty Design</title>
			</Head>
			<Seo />
			<ApolloProvider client={client}>
				<ConfigProvider locale={enUS}>
					<NProgress />
					<Component {...pageProps} />
				</ConfigProvider>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
