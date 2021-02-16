import React from "react"
import { List } from "./List";
import Queue from "./Queue";
import '../css/main.css';

/* 
The home page in which all of the components will be stored

*/
const Main = () => {
  
    return(
        <div id="main">

            <div id="left">
                <h1 id="logo">Cardea</h1>

                <List
                    job= {{location:'shrek',name:'Job list for SWEs'}}
                />

                <List
                    job= {{location:'shrek',name:'Job list for graphic designer musicians'}}
                />

                <List
                    job= {{location:'shrek',name:'Job list for Gamer product designers'}}
                />
            </div>

            <div id="right">
                <Queue
                
                />
            </div>
            

        </div>
    )
}

export default Main
