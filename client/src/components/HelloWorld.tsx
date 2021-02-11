import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import {HelloWorldQuery} from "./__generated__/HelloWorldQuery";

const HELLOWORLD_QUERY = gql`
    query HelloWorldQuery {
        hello
    }
`

const HelloWorld = () => {
    const { loading, error, data } = useQuery<HelloWorldQuery>(HELLOWORLD_QUERY, {
    })
    return(
        <>
            {loading && <h1>Loading</h1>}
            {error && <h1>Error</h1>}
            {data && <h1>{data.hello}</h1>}
        </>
    )
}

export default HelloWorld
