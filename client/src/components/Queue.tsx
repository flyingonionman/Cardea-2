import React, { useState, useEffect } from "react"
import { connect, ConnectedProps } from 'react-redux'
import Queueitem from "./Queueitem"
import Retriever from './Retriever'

import "../css/Queue.css"

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
let curridx = 0 

const Queue = (props:Props) => {
    const [temparray, setTemparray] = useState<JobType[]>([
    ])

    const [jobarray, setJobarray] = useState<JobType[]>([
    ])

    const updater = (data: any) => {

        setTemparray([...temparray, ...data].filter((thing : any, index : any, self: any) => {
            return index === self.findIndex((t : any) => (
                 t.id === thing.id
              ))
        }, () => {
            
        }))
       
    }

    console.log(props.list.listoflist)
    let update = props.list.listoflist.map((e: string, i: number) => (
        
        <Retriever
            listname={e}
            updater={(data: any) => { updater(data) }}
            key={i}
        />
    ))
    
    useEffect(() => {
        console.log(temparray)

    }, [temparray])

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
                order={i}
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
            {update}

        </div>
    )
}

export default connector(Queue)
