import React from "react"
import { connect, ConnectedProps } from 'react-redux'
import { addlist } from '../actions/'

/* 
    Redux functionalities
*/

const mapState = () => ({})
  
const mapDispatch = (dispatch :any) => {
    return {
        addtolist: (list: any) => (dispatch(addlist(list)))
    }
} 

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    listname: string,
    curatorname: string,
    description: string,
    imgurl: string,
}



/* 
Individual job playlists and their information    
*/
const Listitem = (props: Props) => {
  
    const clickhandler = () => {
        props.addtolist(props.listname)
    }

    return(
        <li className="listitem">
            <img
                onClick={clickhandler}
                src={props.imgurl}
            />
            <p className="listname">{props.listname}</p>
            <p>Curated by <a className="curator">{props.curatorname} </a></p>
            <p className="silver_text">{props.description}</p>
        </li>
    )
}

export default connector(Listitem)
