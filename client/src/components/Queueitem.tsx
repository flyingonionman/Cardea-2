import React, {useState} from "react"

interface ListType {
    Name: string,
    Image: string
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
Individual job and their corresponding information  
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
            
            <div className="basic">
                <p className="numberorder">{props.order}</p>

                <p className="company">{props.company}</p>
                <p className="positions">{props.jobname}</p>
                <p className="location">{props.location}</p>
            </div>


            <div className="details">
                <p >Salary range: {props.salarymin} ~ {props.salarymax}</p>
    
                <p>Part of these lists:</p>

                <ul className="listoflist">
                    {props.lists.map((e: ListType, i: number) => {
                        return <div className="listoflistholder" key={i}>
                            <img style={{maxWidth : "60px"}} src={e.Image}></img>
                            <p  style={{margin:0}}className="listoflistname">{e.Name}</p>  
                        </div>
                    })}
                </ul>
                <a href={props.applylink} target="_blank"
                     rel="noopener noreferrer"
                >Apply here!</a>
                
            </div>
        </li>
    )
}

export default Queueitem
