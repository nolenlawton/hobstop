import { useParams } from "react-router-dom";
import Sidebar from '../Navigation/Sidebar'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Players () {
    const sport = useParams().sport
    const dispatch = useDispatch()

    useEffect(() => {
        getPlayers()
    }, [])

    //  struggle to get all
    const getPlayers = () => {
        dispatch({
            type: 'GET_ALL_PLAYERS'
        })
    }

    return (
        <>
            <Sidebar selection={1}/>
            <h1 style={{position: 'fixed', top: '50%', left: '50%', color:'white'}}>{sport} players</h1>
        </>
    )
}

export default Players;