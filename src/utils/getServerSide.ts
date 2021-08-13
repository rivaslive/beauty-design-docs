import { gql } from '@apollo/client';
import { initializeApollo } from 'apollo/config';
import { GET_COMPONENT_VERSION } from '../graphql/component.query';

export const getPathsComponent = async () => {
	const client = initializeApollo();
	let paths = [];
	try {
		const { data } = await client.query({
			query: gql`
				query {
					versions {
						id
						version
					}
				}
			`,
		});
		paths = data.versions.map((v: any) => ({
			params: v,
		}));
	} catch (e) {
		console.log(e);
	}

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: true };
}


export const getServerSideProps = async (component: string, version: string) => {
	let res = null;
	const client = initializeApollo();
	// Call an external API endpoint to get posts
	try {
		const { data }: { data: IGraphComponentRes } = await client.query({
			query: GET_COMPONENT_VERSION,
			variables: {
				title: component,
				version: version,
			},
		});

		if (data && data?.componentes) {
			if (data.componentes.length) {
				res = data.componentes[0];
			}
		}

		// By returning { props: { data } }, the component
		// will receive `data` as a prop at build time
		return {
			props: {
				data: res,
			},
		};
	} catch (e) {
		console.log(e);
		return {
			props: {
				data: null,
			},
		};
	}
}
