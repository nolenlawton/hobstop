import { useParams } from "react-router-dom";
import Sidebar from "./Navigation/Sidebar";

function Statistics () {
    const sport = useParams().sport

    return (
        <>
            <Sidebar selection={3} />
            <h1 style={{position: 'fixed', top: '50%', left: '50%', color:'white'}}>{sport} statistics</h1>
        </>
    )
}

export default Statistics;