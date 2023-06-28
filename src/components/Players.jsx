import { useParams } from "react-router-dom";
import Sidebar from './Navigation/Sidebar'

function Players () {
    const sport = useParams().sport

    return (
        <>
            <Sidebar selection={1}/>
            <h1 style={{position: 'fixed', top: '50%', left: '50%', color:'white'}}>{sport} players</h1>
        </>
    )
}

export default Players;