import React from "react"
import Listitem from "./Listitem"
import '../css/List.css'
/* 
List which will contain the playlists of jobs articulated by individuals

*/


type Props = {
    Data : any
}

/* 
    @TODO: click curator's name and it shows their list
*/
export const List = ({Data} : Props) => {
    let variablelist = <ul className="List_container">
        {Data.allLists.map((e: any, i : number)=>
            <Listitem
                listname={e.Name}
                curatorname={e.Curator}
                imgurl = {e.Image}
                description={e.Description}
                key={i}
            />
        )}

    </ul>

    return(
        <div className="List">
            <h4>List for SWEs </h4>
            {variablelist}
            <hr className="divider"></hr>

        </div>
    )
}
