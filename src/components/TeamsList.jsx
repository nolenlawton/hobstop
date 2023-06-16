import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

// import atl from "../NBA Logos/atlanta-hawks-logo-512x512.png"
// import bos from "../NBA Logos/boston-celtics-logo-vector.png"
// import brk from "../NBA Logos/brooklyn-nets-logo-vector.png"
// import cha from "../NBA Logos/charlotte-hornets-logo-preview.png"
// import chi from "../NBA Logos/chicago-bulls-logo-vector.png"
// import cle from "../NBA Logos/cleveland-cavaliers-logo-512x512.png"
// import dal from "../NBA Logos/dallas-mavericks-logo-512x512.png"
// import den from "../NBA Logos/denver-nuggets-logo-512x512.png"
// import det from "../NBA Logos/detroit-pistons-logo-vector.png"
// import gs from "../NBA Logos/golden-state-warriors-logo-vector.png"
// import hou from "../NBA Logos/houston-rockets-logo-512x512.png"
// import ind from "../NBA Logos/indiana-pacers-logo-512x512.png"
// import lac from "../NBA Logos/los-angeles-clippers-logo-vector.png"
// import lal from "../NBA Logos/los_angeles_lakers-logo_brandlogos.net_hqqxr-512x512.png"
// import mem from "../NBA Logos/memphis-grizzlies-logo-512x512.png"
// import mia from "../NBA Logos/miami-heat-logo-vector.png"
// import mil from "../NBA Logos/milwaukee-bucks-logo-512x512.png"
// import min from "../NBA Logos/minnesota-timberwolves-logo-vector.png"
// import no from "../NBA Logos/new-orleans-pelicans-vector-logo.png"
// import ny from "../NBA Logos/new_york_knicks-logo_brandlogos.net_9klcy-512x512.png"
// import okc from "../NBA Logos/oklahoma-city-thunder-logo-vector.png"
// import orl from "../NBA Logos/orlando-magic-logo-vector.png"
// import phl from "../NBA Logos/philadelphia_76ers-brandlogo.net_-512x512.png"
// import phx from "../NBA Logos/phoenix-suns-logo-512x512.png"
// import por from "../NBA Logos/portland-trail-blazers-logo-preview.png"
// import sac from "../NBA Logos/sacramento-kings-logo-vector.png"
// import san from "../NBA Logos/san-antonio-spurs-logo-vector.png"
// import tor from "../NBA Logos/raptors-logo-preview.png"
// import uta from "../NBA Logos/utah-jazz-logo-vector.png"
// import was from "../NBA Logos/washington-wizards-logo-512x512.png"





function TeamsList () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const teams = useSelector(store => store.teams)

    useEffect(() => {
        getTeams()
    })

    const getTeams = () => {
        console.log('get teams')
        dispatch ({
            type: 'GET_TEAMS'
        })
    }


    const teamPage = (team) => {
        navigate( `/nba/${team.location.split(' ').join('') }/${team.name.split(' ').join('') }` )
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