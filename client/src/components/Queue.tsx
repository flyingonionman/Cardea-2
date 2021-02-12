import React from "react"
import Queueitem from "./Queueitem"
import "../css/Queue.css"
const Queue = () => {
  
    return(
        <div id="queue">
            
            <h2>Queue</h2>

            <h4>tags : Cardea's favorites</h4>
            <div id="queue_container">
                <ul>
                    <Queueitem listname={"boop"}/>
                    <Queueitem listname={"boop"}/>
                    <Queueitem listname={"boop"}/>

                </ul>
            </div>
        </div>
    )
}

export default Queue
