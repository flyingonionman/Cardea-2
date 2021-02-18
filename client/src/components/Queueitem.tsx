import React, {useState} from "react"


type Props = {
    jobname: string,
    company: string,
    location: string,
    backgroundcolor: number,
    order : number
}


/* 
Individual job playlists and their information    
*/
const Queueitem = ( props: Props) => {
    const [toggle, settoggle] = useState(false)

    const [jobarray, setJobarray] = useState([{

    }])

    return(
        <li className={
            "joblist " +
            (props.backgroundcolor % 2 ? "" : "accent ") +
            ((toggle) ? "description" : "")
        }
            onClick={()=>settoggle(!toggle)}
        >
            <p className="numberorder">{props.order}</p>

            <p className="company">{props.company}</p>
            <p className="positions">{props.jobname}</p>
            <p className="location">{props.location}</p>

        </li>
    )
}

export default Queueitem
