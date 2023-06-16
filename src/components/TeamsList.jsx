import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

function TeamsList () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const teams = useSelector(store => store.teams)

    console.log(teams)

    useEffect(() => {
        getTeams()
    })

    const getTeams = () => {
        dispatch ({
            type: 'GET_TEAMS'
        })
    }


    const teamPage = (team) => {
        navigate( `/nba/${team.location.split(' ').join('') }/${team.name.split(' ').join('') }/${team.primary}` )
    }

    return (
        <div id='teamList'> {
            teams.map( (team, i) => {
                return (
                    <div key={i} id='team' onClick={() => teamPage(team)}>
                        <span>{team.location} {team.name}</span>
                        <img width='10%' src={team.logo} alt={team.name} />
                    </div>
                )
            })
        } </div>
    )

}

export default TeamsList;