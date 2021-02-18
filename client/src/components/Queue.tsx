import React, { useState, useEffect } from "react"
import { connect, ConnectedProps } from 'react-redux'
import Queueitem from "./Queueitem"
import {  useLazyQuery  } from "@apollo/react-hooks"

import "../css/Queue.css"

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
 */

const Queue = (props: Props) => {
    const [currnumber ,setCurrnumber] = useState<number>(-1)
    const [temparray, setTemparray] = useState<JobType[]>([
    ])

    
    const [getjobs, {data }] = useLazyQuery(LIST_SELECT);
    
    const [datalist, setDatalist] = useState()
    /* 
    Updates the existing roster of jobs
    
    */
    const updater = (data: any) => {
        setTemparray([...temparray, ...data].filter((thing : any, index : any, self: any) => {
            return index === self.findIndex((t : any) => (
                 t.id === thing.id
              ))
        }, () => {
            
        }))
       
    }

    useEffect(() => {
        setCurrnumber(currnumber=> currnumber+1)

        if (props.list.listoflist.length < currnumber) {
            setCurrnumber(props.list.listoflist.length)
            getjobs({ variables: { Name: "" } })
            setTemparray([])

        } 

        props.list.listoflist.map((name: string, i: number) => {
            console.log(props.list.listoflist)
            getjobs({ variables: { Name: name } })
            return
        })
    
        console.log(data)

    }, [props.list.listoflist])


    useEffect(() => {
        if (data !== null && data !== undefined) {
            if (data.listselect) {
                updater(data.listselect.jobSet)

                /* 
                Effectively "resets" the data queue
                */
                getjobs({ variables: { Name: "" } })

            } 
        } else {
        }
    }, [data,])

    useEffect(() => {

    }, [currnumber])


    /* 
        Dynamically loads jobs from the selected list
    
    */
    let variablelist = <ul id="queue_container">
        <li id="columns">
            <p className="numberorder">#</p>

            <p className="company">Company</p>
            <p className="positions">Position</p>
            <p className="location">Location </p>
        </li>
        <hr></hr>
        {temparray.map((e : any, i: number) => (
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
        <h5 style={{ display: "inline" }}>Tags : </h5>
        {props.list.listoflist.map((e : string, i: number) => (
            <li className="tags" key={i}>{e}</li>
        ))}
    </ul>
    
    return (
        
        <div id="queue">
            {/* <HelloWorld/> */}
            <h2>Queue</h2>
            {variabletag}
            {variablelist}

        </div>
    )
}

export default connector(Queue)
