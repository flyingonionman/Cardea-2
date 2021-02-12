import React from "react"

type Props = {
    listname : string
}
/* 
Individual job playlists and their information    
*/
const Listitem = ({listname }: Props) => {
  
    return(
        <li>
            <img src="https://lineup-images.scdn.co/wrapped-2020-top100_LARGE-en.jpg"  />
            {listname}
        </li>
    )
}

export default Listitem
