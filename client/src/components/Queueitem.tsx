import React from "react"

type Props = {
    listname : string
}
/* 
Individual job playlists and their information    
*/
const Queueitem = ({listname }: Props) => {
  
    return(
        <li className="joblist">
            {listname}
        </li>
    )
}

export default Queueitem
