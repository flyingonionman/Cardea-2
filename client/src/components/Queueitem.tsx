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


            {/* 
                Information one sees when one clicks on one of the job listings
                
            */}
            <div className="details">
                <p >Salary range: {props.salarymin} ~ {props.salarymax}</p>
                <a href={props.applylink} target="_blank"
                     rel="noopener noreferrer"
                    >Apply here!</a>

                <ul className="listoflist">
                
                    

                <p>Part of these lists:</p>

                    {props.lists.map((e: ListType, i: number) => {
                        return <div className="listoflistholder" key={i}>
                            <img style={{maxWidth : "65px"}} src={e.Image}></img>
                            <p  style={{margin:0}}className="listoflistname">{e.Name}</p>  
                        </div>
                    })}
                </ul>
        
                
            </div>
        </li>
    )
}

export default Queueitem
