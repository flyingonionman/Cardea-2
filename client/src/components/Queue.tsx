import React, { useState, useEffect } from "react"
import { connect, ConnectedProps } from 'react-redux'

import Queueitem from "./Queueitem"
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



type Questitem = {
    id: number;
    name: string;
}

const Queue = (props:Props) => {
    const [itemarray, setitemarray] = useState<Questitem[]>([
        { "id": 1, "name": "google", },
        { "id": 2, "name": "googler", },
        { "id": 3, "name": "googler", },
        { "id": 4, "name": "googler", },
        { "id": 5, "name": "googler", },
        { "id": 6, "name": "googler", },

    ])

    useEffect(() => {
        
    }, [])

    console.log(props.list)
    /* 
        Dynamically loads jobs from the selected list
    
    */
    let variablelist = <ul id="queue_container">
        <li className="joblist">
            <h5>Company</h5>
            <h5>Position</h5>
            <h5 className="location">Location </h5>
        </li>
        {itemarray.map((e, i) => (
            <Queueitem
                listname={e.name}
                backgroundcolor={i}
                key={i}
            />
        ))}
    </ul>
    
    let variabletag = <ul>
        <h5 style={{ display: "inline" }}>Tags : </h5>
        {props.list.listoflist.map((e : string, i: number) => (
            <li className="tags" key={i}>{e}</li>
        ))}
    </ul>
    
    return (

        <div id="queue">
            {/* <HelloWorld/> */}
            <h2>Queue</h2>
            <hr></hr>
            {variabletag}
            {variablelist}
        </div>
    )
}

export default connector(Queue)
