import React from "react"
import { List } from "./List";
import Queue from "./Queue";
import '../css/main.css';
import { useQuery } from "@apollo/react-hooks"
import {all_list} from "./__generated__/all_list";

import gql from "graphql-tag"

const LIST_ALL = gql`
    query all_list{
            allLists{
                id
                Name
                Description
                Image
                Curator
        }
    }
`
/* 
The home page in which all of the components will be stored

*/
const Main = () => {
    const { loading, error, data } = useQuery<all_list>(LIST_ALL, {
    })
    return(
        <div id="main">

            <div id="left">
                <h1 id="logo">Cardea2</h1>
                {loading && <h1>Loading</h1>}
                {error && <h1>Error</h1>}
                {data &&        
                    <>
                       <List
                            Data={data}
                        />
           
                        <List
                            Data={data}
                        />
                    
                        <List
                            Data={data}
                        />
                    </>    
                }
            </div>

            <div id="right">
                <Queue
                
                />
            </div>
            

        </div>
    )
}

export default Main
