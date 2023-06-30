import { useParams } from "react-router-dom";
import Sidebar from "../Navigation/Sidebar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Standings () {
    const sport = useParams().sport
    const dispatch = useDispatch()
    const standings = useSelector(store => store.standings)

    useEffect(() => {
        getStandings();
    }, [])

    const getStandings = () => {
        dispatch({
            type: 'GET_STANDINGS'
        })
    }

    return (
        <div style={{ display: 'flex'}}>
            <Sidebar selection={2}/>
            <div style={{display: 'flex', flexDirection: 'column', margin: '110px 0px 0px 0px', width: '100%', padding: '32px'}}>
                <div style={{ display:'flex', justifyContent: 'space-evenly'}}>
                    <div>Team</div>
                    <div>Wins</div>
                    <div>Losses</div>
                    <div>W%</div>
                    <div>Streak</div>
                </div>
                {standings.map((standing, i) => { 
                    return (
                        <div  style={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-between'}} key={i}>
                            <div>{standing.team.name}</div>
                            <div>{standing.conference.win}</div>
                            <div>{standing.conference.loss}</div>
                            <div>{standing.conference.win/(standing.conference.win + standing.conference.loss)}%</div>
                            <div id={standing.winStreak ? 'win' : 'loss'}>{standing.streak}</div>
                        </div>
                    )
                })}
            </div> 
        </div>
    )
}

export default Standings;