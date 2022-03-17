import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ITechnology } from "interfaces/technology";

const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
        Authorization: process.env.GRAPHQL_AUTH_TOKEN as string
    },
});

export async function listTechnologies(): Promise<Array<ITechnology>> {
    const { data } = await client.query({
        query: gql`
        query{
            listTechnologies{
                data{
                	title
                	icon
                }
            }
        }`
    });
    return data.listTechnologies.data;
}