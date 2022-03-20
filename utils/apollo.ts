import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ITechnology } from "interfaces/technology";

const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.GRAPHQL_AUTH_TOKEN}`
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
    let result: Array<ITechnology> = Array.from(data.listTechnologies.data);
    return result.sort((oldItem, newItem) => {
        if(oldItem.title < newItem.title) return -1;
        if(oldItem.title > newItem.title) return 1;
        return 0
    })

}