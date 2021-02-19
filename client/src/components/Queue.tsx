import React, { useState, useEffect, useReducer } from "react"
import { connect, ConnectedProps } from 'react-redux'
import Queueitem from "./Queueitem"
import {  useLazyQuery  } from "@apollo/react-hooks"

import "../css/Queue.css"

import gql from "graphql-tag"

const LIST_SELECT = gql`
    query lister($Name:[String!]!){
        listoflist(Name: $Name){
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
                    Image
                }
            }
        }
    }
`

interface listState {
    List: any
}





/* 
    Redux functionalities
*/

const mapState = (state: listState) => ({
    list: state.List
})
  
const mapDispatch = {}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux 



type Queueitem = {
    id: number;
    name: string;
}

interface ListType {
    Name: string
    Image: string
}

type JobType = {
    id: string,
    JobTitle: string,
    Company: string,
    Location: string,
    SalaryMin: string,
    SalaryMax: string,
    Lists: ListType[],
    ApplyLink : string
}

/* 
    Queue that contains actual list of jobs
    passes down information it fetches to Queueitems

*/
const Queue = (props: Props) => {
    let temparray: JobType[] = []
    /* 
    sum to calculate average salary
    */
    let sum = 0;

    const [jobarray, setJobarray] = useState<JobType[]>([ ])

    const [getjobs, {data }] = useLazyQuery(LIST_SELECT);
    

    /* 
    We fetch data from the server whenever reducer gets triggered ( whenever we click any of the lists)
    
    */

    useEffect(() => {
        getjobs({ variables: { Name: props.list.listoflist } })
    }, [props.list.listoflist])


    /* 
    When the data is receieved, it is filtered to check for duplicate entries

    */
    useEffect(() => {
        if (data) {
            data.listoflist.map((e : any, i: number) => {
                temparray = [...temparray, ...e.jobSet]
            })

            /* 
            fiilter duplicate entries ( two jobs in the same list)
            */
            temparray = temparray.filter((thing : any, index : any, self: any) => {
                return index === self.findIndex((t : any) => (
                     t.id === thing.id
                  ))
            })

            setJobarray(temparray);

            temparray = []
        }
    }, [data])

    /* 
    Sorting function in the works 
    hint : it doesn't work now
    
    */
    const sorter = (sortby: string) => {
        console.log(sortby)
        switch (sortby) {
            case 'location':
                jobarray.sort((a,b)=> (a.Location.toLowerCase() > b.Location.toLowerCase()) ? 1 : -1)
            case 'company':
                jobarray.sort((a,b)=> (a.Company.toLowerCase() > b.Company.toLowerCase()) ? 1 : -1)

            default:
        }

    }
        

    /* 
        Component that dynamically loads jobs and its corresponding details
    
    */
    let variablelist = <ul id="queue_container">
        <li id="columns">
            <p className="numberorder">#</p>

            <p onClick={()=>sorter('company')} className="company">Company</p>
            <p className="positions">Position</p>
            <p onClick={()=>sorter('location')} className="location">Location </p>
        </li>
        <hr></hr>
        {jobarray.map((e : any, i: number) => (
            <Queueitem
                order={i+1}
                jobname={e.JobTitle}
                company={e.Company}
                location={e.Location}
                salarymin={e.SalaryMin}
                salarymax={e.SalaryMax}
                applylink={e.ApplyLink}
                lists = {e.Lists}
                backgroundcolor={i}
                key={i}
            /> 
    
        ))}
    </ul>
    
    let variabletag = <ul className="tagscontainer">
        <h5 style={{ display: "inline", }}>Tags : </h5>
        {props.list.listoflist.map((e : string, i: number) => (
            <li className="tags" key={i}>{e}</li>
        ))}
    </ul>
    
    let variabledata = <ul className="metadata">
        {jobarray.map((e: any, i: number) => {
            
            let min = parseInt(e.SalaryMin.replace('$', '').replace(',', ''))
            let max = parseInt(e.SalaryMax.replace('$', '').replace(',', ''))
            let avg = (max + min)/2;
            sum += avg
            return
        })}

        <h5>Metadata  </h5>
        <hr></hr>
        <h5>Average salary: {sum / jobarray.length | 0}  </h5>

    </ul>


    return (
        
        <div id="queue">
            {/* <HelloWorld/> */}
            <h2 color="#011627">Queue</h2>
            {variabletag}
            {variabledata}
            {variablelist}

        </div>
    )
}

export default connector(Queue)
