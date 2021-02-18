import React, {useState, useEffect} from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const LIST_SELECT = gql`
    query Listselect($Name:String!){
        listselect(Name: $Name){
            Description
            jobSet{
                id
                JobTitle
                Company
                Location
                SalaryMin
                SalaryMax
                ApplyLink
                Lists{
                    Name
                }
            }
        }
    }
`

type Props = {
  listname: string
  updater: Function
}
/* 
Individual job playlists and their information    
*/
const Retriever = (props: Props) => {

    const { loading, error, data } = useQuery(LIST_SELECT, {
      variables: {
          Name:  props.listname
          } 
    });
  
  useEffect(() => {
    if (data) {
      props.updater(data.listselect.jobSet)
    }
  }, [data])

    return(
        <>

        </>
    )
}

export default Retriever
