import React, {useState, useEffect} from "react"
import Queueitem from "./Queueitem"
import "../css/Queue.css"

type Questitem = {
    id: number;
    name: string;
}


const Queue = () => {
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

    return (

        <div id="queue">
            {/* <HelloWorld/> */}
            <h2>Queue</h2>
            <hr></hr>
            <h4>tags : Cardea's favorites</h4>
            {variablelist}
        </div>
    )
}

export default Queue
