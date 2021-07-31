import {
	ApolloClient,
	InMemoryCache,
} from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/graphql'

export const client = new ApolloClient({
	uri: `${uri}`,
	cache: new InMemoryCache()
});
