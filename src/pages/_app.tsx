import 'antd/dist/antd.css';

import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';

// Global styles
import GlobalStyle from 'styles/general';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Beauty UI</title>
			</Head>
			<ConfigProvider locale={enUS}>
				<Component {...pageProps} />
			</ConfigProvider>
			<GlobalStyle />
		</>
	);
}

export default MyApp;
