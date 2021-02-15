import React, {useState} from "react"
import Listitem from "./Listitem"
import '../css/List.css'
/* 
List which will contain the playlists of jobs articulated by individuals

*/
interface Job {
    name: string;
    location : string
}

type Props = {
    job : Job
}

export const List = ({job} : Props) => {
    const [name, setName] = useState<string>("List for SWEs")

    return(
        <div className="List">
            <h4>{job.name} </h4>
            <ul className="List_container">
                <Listitem listname={"Cardea's favorites"} />
                <Listitem listname={"Cardea's favorites"}/>
                <Listitem listname={"Cardea's favorites"}/>
                <Listitem listname={"Cardea's favorites"}/>
            </ul>
            
        </div>
    )
}
