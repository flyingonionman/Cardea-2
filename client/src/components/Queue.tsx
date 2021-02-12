import React from "react"
import Queueitem from "./Queueitem"

const Queue = () => {
  
    return(
        <div id="queue">
            
            <h3>Queue</h3>


            <div>
                <ul>
                    <Queueitem listname={"boop"}/>
                    <Queueitem listname={"boop"}/>

                </ul>
            </div>
        </div>
    )
}

export default Queue
