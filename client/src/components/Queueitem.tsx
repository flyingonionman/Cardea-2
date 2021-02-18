import React, {useState} from "react"

interface ListType {
    Name: string
}

type Props = {
    jobname: string,
    company: string,
    location: string,
    salarymin: string,
    salarymax: string,
    applylink: string,
    lists: ListType[]
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
            
            <div className="basic">
                <p className="numberorder">{props.order}</p>

                <p className="company">{props.company}</p>
                <p className="positions">{props.jobname}</p>
                <p className="location">{props.location}</p>
            </div>


            <div className="details">
                <p >Salary minimum: {props.salarymin}</p>
                <p >Salary maximum: {props.salarymax}</p>
                <a href={props.applylink} target="_blank">Apply here!</a>
                <ul>
                    Part of these lists:
                    {props.lists.map((e: ListType, i: number) => {
                        return <p key={i}>{e.Name}</p>  
                    })}
                </ul>

            </div>
        </li>
    )
}

export default Queueitem
