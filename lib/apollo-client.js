import { ApolloClient, InMemoryCache } from "@apollo/client";

const APIURL = 'https://api.thegraph.com/subgraphs/name/cryptodogg/total-amount'

const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
});

export default client;