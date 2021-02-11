import { ApolloClient } from "apollo-client"
import { createUploadLink } from "apollo-upload-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { onError } from "apollo-link-error"
import { ApolloLink } from "apollo-link"
import config from "../config"

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                    )
                )
            if (networkError) console.log(`[Network error]: ${networkError}`)
        }),
        createUploadLink({
            uri: `${config.SERVER_URL}/graphql`,
            credentials: "include",
        }),
    ]),
    cache: new InMemoryCache(),
})

export default client
