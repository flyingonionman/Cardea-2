import React, {useState} from "react"
import { connect, ConnectedProps } from 'react-redux'
import { addlist , removelist} from '../actions/'

/* 
    Redux functionalities
*/

const mapState = () => ({})
  
const mapDispatch = (dispatch :any) => {
    return {
        addtolist: (list: any) => (dispatch(addlist(list))),
        removefromlist:  (list:any) => (dispatch(removelist(list)))
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
    const [clicked, setClicked] = useState(false)

    const clickhandler = () => {
        if (clicked) {
            props.removefromlist(props.listname)
        } else {
            props.addtolist(props.listname)
        }
        setClicked(!clicked);
    }

    return(
        <li className="listitem">
            <img className={(clicked ? "clicked": "")}
                onClick={clickhandler}
                src={props.imgurl}
                alt=""
            />
            <p
                onClick={clickhandler}
                className="listname"
            >
                {props.listname}
            </p>
            <p className="curator">Curated by {props.curatorname} </p>
            <p className="silver_text">{props.description}</p>
        </li>
    )
}

export default connector(Listitem)
