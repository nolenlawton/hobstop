import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// for dummy data


function TeamPage () {
    let params = useParams()
    const team = useSelector(store => store.team)
    const dispatch = useDispatch()

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
            action: params
        })
    }

    // dummy data for schedule
    // const schedule = [
    //     {date: '2/3 ',isHome: true , opponent: cle , result: 'W' },
    //     {date: '2/6 ',isHome: true , opponent: okc, result: 'W'},
    //     {date: '2/8 ',isHome: false , opponent: okc, result: 'L' },
    //     {date: '2/11 ',isHome: false , opponent: lal, result: 'W' },
    //     {date: '2/12 ',isHome: false , opponent: den, result: 'L' },
    //     {date: '2/14 ',isHome: true , opponent: uta },
    //     {date: '2/17 ',isHome: false , opponent: tor },
    //     {date: '2/19 ',isHome: true , opponent: ny },

    // ]

    return (
        <div id="teamPage" >
            {/* header */}
            <div id="teamHeader" style={{ backgroundColor : team.primary, border : `2px solid ${team.secondary}`, fontFamily: team.font }}>
                <div>{team.location} {team.name}</div>
            </div>

            {/* body with media player */}
            <div id="teamBody" style={{ backgroundColor : team.primary, border: `2px solid ${team.secondary}` }}>
                <div id="mediaPlayer" style={{ border: `2px solid ${team.secondary}` }}></div>
            </div>

            {/* schedule, past 5, next 3, 8 total */}
            {/* <div id="teamSchedule" style={{ border: `4px solid ${team.primary}`}}>
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
            </div> */}
        </div>
    )
}

export default TeamPage;