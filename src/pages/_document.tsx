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
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
					<meta
						name="keywords"
						content="react-native, React Native, npm, docs, beauty-ui, beauty ui, provider, title, button, tabs, cards, api"
					/>
					<meta name="author" content="rivaslive" />
					<meta property="title" content="React Native Beauty UI" />
					<meta
						property="og:title"
						content="React Native Beauty UI"
					/>
					<meta
						property="og:url"
						content="https://https://beaury-ui-docs.vercel.app"
					/>
					<meta property="og:type" content="website" />
					<meta
						property="og:image"
						content="https://https://beaury-ui-docs.vercel.app/android-chrome-192x192.png"
					/>
					<meta
						property="og:image:secure_url"
						content="https://https://beaury-ui-docs.vercel.app/android-chrome-192x192.png"
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
