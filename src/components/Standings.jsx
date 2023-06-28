import { useParams } from "react-router-dom";
import Sidebar from "./Navigation/Sidebar";

function Standings () {
    const sport = useParams().sport

    return (
        <>
            <Sidebar selection={2}/>
            <h1 style={{position: 'fixed', top: '50%', left: '50%', color:'white'}}>{sport} standings</h1>
        </>
    )
}

export default Standings;