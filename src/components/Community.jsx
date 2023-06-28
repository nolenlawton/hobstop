import { useParams } from "react-router-dom";
import Sidebar from './Navigation/Sidebar'

function Community () {
    const sport = useParams().sport

    return (
        <>
            <Sidebar selection={4}/>
            <h1 style={{position: 'fixed', top: '50%', left: '50%', color:'white'}}>{sport} community</h1>
        </>
        )
}

export default Community;