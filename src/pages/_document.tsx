import React from 'react';
import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		const { renderPage } = ctx;

		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet();

		// Step 2: Retrieve styles from components in the page
		renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

		// Step 3: Extract the styles as <style> tags
		const styleTags = sheet.getStyleElement();

		return {
			...initialProps,
			styleTags,
		};
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta name="msapplication-TileImage" content="/favicon.png" />
					<link
						rel="apple-touch-icon-precomposed"
						sizes="128x128"
						href="/favicon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/favicon.png"
						sizes="128x128"
					/>
					<meta
						name="keywords"
						content="empresas de marketing digital, empresa marketing digital, servicios de marketing digital, mercadeo y publicidad virtual, empresas de mercadotecnia, maestría en marketing digital, especialización marketing digital, agencia de mercadeo, mercadeo en red por internet, especializaciones marketing digital, mercadeo y publicidad virtual gratis, publicidad digital,consultores digitales, programatica, branding, performance, Rich media, Native ADs, Rising Star, display, GEO fencing, footfall attribution, multicanalidad, marketing digital, mercadeo digital"
					/>
					<meta name="author" content="rivaslive & Daniel" />
					<meta property="title" content="React Native Beauty UI" />
					<meta
						property="og:title"
						content="React Native Beauty UI"
					/>
					<meta
						property="og:url"
						content="https://"
					/>
					<meta property="og:type" content="website" />
					<meta
						property="og:image"
						content="https://"
					/>
					<meta
						property="og:image:secure_url"
						content="https://"
					/>
					<meta property="og:image:type" content="image/png" />
					<meta property="og:image:width" content="450" />
					<meta property="og:image:height" content="253" />
					<meta
						property="og:image:alt"
						content="React Native Beauty UI"
					/>
					<meta
						name="og:description"
						content="The best UI components library for React Native"
					/>
					<meta
						name="description"
						content="The best UI components library for React Native"
					/>
					<link
						rel="icon"
						href="https://"
						type="image/png"
					/>

					{/* GOOGLE FONTS */}
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
