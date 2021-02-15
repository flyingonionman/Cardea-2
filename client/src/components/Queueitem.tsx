import React, {useState} from "react"

type Props = {
    listname: string
    backgroundcolor: number
}
/* 
Individual job playlists and their information    
*/
const Queueitem = ({ listname, backgroundcolor }: Props) => {
    const [toggle, settoggle] = useState(false)

    return(
        <li className={
            "joblist " +
            (backgroundcolor % 2 ? "" : "accent ") +
            ((toggle) ? "description" : "")
        }
            onClick={()=>settoggle(!toggle)}
        >
            <h5>{listname}</h5>
            <h5>Software engineer</h5>
            <h5 className="location">LA/NY </h5>
        </li>
    )
}

export default Queueitem
