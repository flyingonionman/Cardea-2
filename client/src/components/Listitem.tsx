import React from "react"


type Props = {
    listname: string,
    curatorname: string,
    description: string,
    imgurl: string,
}

/* 
Individual job playlists and their information    
*/
const Listitem = ({listname , curatorname, description, imgurl}: Props) => {
  
    return(
        <li className="listitem">
            <img src={imgurl}  />
            <p className="listname">{listname}</p>
            <p>Curated by {curatorname} </p>
            <p className="silver_text">{description}</p>

        </li>
    )
}

export default Listitem
