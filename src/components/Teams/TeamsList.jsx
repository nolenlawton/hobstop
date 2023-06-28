import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Sidebar from "../Navigation/Sidebar"


function TeamsList () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const teams = useSelector(store => store.teams)
    const [hover, setHover] = useState(-1)

    // on load
    useEffect(() => {
        getTeams()
    }, [1])

    // gets all teams
    const getTeams = () => {
        dispatch ({
            type: 'GET_TEAMS'
        })
    }

    // sends user to team page
    const teamPage = (team) => {
        navigate( `/nba/${team.name.split(' ').join('') }` )
    }
    
    return (
        <div style={{display: 'flex'}}>

            <Sidebar selection={0} />


            <div id='teamList'> {
                teams ? teams.map( (team, i) => {
                    return (
                        <div key={i} id='team' onClick={() => teamPage(team)} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)} style={i === hover ? {backgroundColor : team.primary, border: `2px solid ${team.secondary}`} : {backgroundColor : 'white', border: '2px solid white'}}>
                            <img width='100%' src={team.logo} alt={team.name} />
                        </div>
                    ) 
                }) : <></>
            } </div>
        </div>
    )

}

export default TeamsList;