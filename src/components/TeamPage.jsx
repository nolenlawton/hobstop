import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// for dummy data
import cle from '../NBA Logos/cleveland-cavaliers-logo-512x512.png'
import okc from '../NBA Logos/oklahoma-city-thunder-logo-vector.png'
import lal from '../NBA Logos/los_angeles_lakers-logo_brandlogos.net_hqqxr-512x512.png'
import den from '../NBA Logos/denver-nuggets-logo-512x512.png'
import uta from '../NBA Logos/utah-jazz-logo-vector.png'
import tor from '../NBA Logos/raptors-logo-preview.png'
import ny from '../NBA Logos/new_york_knicks-logo_brandlogos.net_9klcy-512x512.png'



function TeamPage () {
    const params = useParams()
    const team = useSelector(store => store.team)
    const dispatch = useDispatch()

    // on page load
    useEffect(() => {
        getTeam()
    }, [1])
    
    // gets team by params
    const getTeam = () => {
        dispatch ({
            type: 'GET_TEAM',
            action: params
        })
    }

    // dummy data for schedule
    const schedule = [
        {date: '2/3 ',isHome: true , opponent: cle , result: 'W' },
        {date: '2/6 ',isHome: true , opponent: okc, result: 'W'},
        {date: '2/8 ',isHome: false , opponent: okc, result: 'L' },
        {date: '2/11 ',isHome: false , opponent: lal, result: 'W' },
        {date: '2/12 ',isHome: false , opponent: den, result: 'L' },
        {date: '2/14 ',isHome: true , opponent: uta },
        {date: '2/17 ',isHome: false , opponent: tor },
        {date: '2/19 ',isHome: true , opponent: ny },

    ]

    return (
        <>
            {/* header */}
            <div id="teamHeader" style={{ backgroundColor : team.primary, border : `4px solid ${team.secondary}`}}>
                <div>{team.location} {team.name}</div>
            </div>

            {/* body with media player */}
            <div id="teamBody" style={{ backgroundColor : team.primary}}>
                <div id="mediaPlayer" style={{ backgroundColor : team.tertiary, border: `8px solid ${team.secondary}` }}>box</div>
            </div>

            {/* schedule, past 5, next 3, 8 total */}
            <div id="schedule" style={{backgroundColor: team.primary, border: `4px solid ${team.secondary}`}}>
                    {schedule.map((matchup, i) => {
                        return (
                        <div key={i} style={{border: matchup.result === 'W' ? '2px solid green' : matchup.result === 'L' ? '2px solid red' : `2px solid ${team.secondary}`, padding:'1%', borderRadius: '8px', width: '8%'}}>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <div>{matchup.date}</div> 
                                <div style={{color: matchup.result === 'W' ? 'green' : 'red'  }}>{matchup.result}</div>
                            </div>
                            <div>{matchup.isHome ? 'VS.' : '@'} <img height='48px'src={matchup.opponent}/></div>
                        </div>
                        )
                    })}
            </div>
        </>
    )
}

export default TeamPage;