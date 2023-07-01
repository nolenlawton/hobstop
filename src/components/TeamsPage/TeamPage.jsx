import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Sidebar from "../Navigation/Sidebar"

// for dummy data
function TeamPage () {
    let params = useParams()
    const team = useSelector(store => store.team)
    const dispatch = useDispatch()
    const players = useSelector(store => store.players)

    // on page load
    useEffect(() => {
        getTeam()
    }, [1])
    
    // gets team by params
    const getTeam = () => {

        if (params.name === 'TrailBlazers') {
            params.name = 'Trail Blazers'
        }

        dispatch ({
            type: 'GET_TEAM',
            payload: params
        })

        dispatch ({
            type: 'GET_PLAYERS',
            payload: params.name
        })
    }

    return (

        <div style={{ display: 'flex', justifyContent: 'center' }}> 
        <Sidebar />
        <div id="teamPage" >
            {/* header */}
            <div id="teamHeader" style={{ backgroundColor : team.primary, border : `2px solid ${team.secondary}`, fontFamily: team.font }}>
                <div>{team.location} {team.name}</div>
            </div>


            <h1 style={{backgroundColor: team.primary, border: `2px solid ${team.secondary}`, fontFamily: team.font }} >Roster</h1>
            
            <div id="playerList">
                {players.map((player, i) => {
                    return <div id="player" key={i} style={{ backgroundColor: team.primary, border: `2px solid ${team.secondary}`}}>{player.firstname} {player.lastname}</div>
                })}
            </div>
        </div>
        </div>
    )
}

export default TeamPage;