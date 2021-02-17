import React, {useState} from "react"

type Props = {
    listname: string
    backgroundcolor: number
    order : number
}
/* 
Individual job playlists and their information    
*/
const Queueitem = ( props: Props) => {
    const [toggle, settoggle] = useState(false)

    return(
        <li className={
            "joblist " +
            (props.backgroundcolor % 2 ? "" : "accent ") +
            ((toggle) ? "description" : "")
        }
            onClick={()=>settoggle(!toggle)}
        >
            <p className="numberorder">{props.order}</p>

            <p className="company">{props.listname}</p>
            <p className="positions">engineer</p>
            <p className="location">LA/NY </p>
        </li>
    )
}

export default Queueitem
