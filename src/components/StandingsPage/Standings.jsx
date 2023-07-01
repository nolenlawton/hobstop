import { useParams } from "react-router-dom";
import Sidebar from "../Navigation/Sidebar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Standings () {
    const sport = useParams().sport
    const dispatch = useDispatch()
    const standings = useSelector(store => store.standings)
    const team = useSelector(store => store.team)
    console.log(team)


    useEffect(() => {
        getStandings();
    }, [])

    const getStandings = () => {
        dispatch({
            type: 'GET_STANDINGS'
        })
    }

    standings.sort((standing1, standing2) => {
        return standing1.conference.rank - standing2.conference.rank
    })

    standings.sort((standing1, standing2) => {
        return standing1.conference.name.localeCompare(standing2.conference.name)
    })

    // google how to make a clean table
    return (
        <div style={{ display: 'flex'}}>
            <Sidebar selection={2}/>
            <div style={{display: 'flex', flexDirection: 'column',  margin:'128px auto auto auto', width: '60%', fontSize: '12px'}}>

                {standings.map((standing, i) => { 
                    const winPercentage = Math.round((standing.conference.win/(standing.conference.win + standing.conference.loss)) * 100) / 100
                    return (
                        <>
                            {i === 0 ? 
                                <>
                                    <div style={{ backgroundColor:'#17408b', padding: '12px', marginBottom: '4px', textAlign: 'center', color: 'white' }}>EAST</div> 
                                    <div style={{ display:'flex', padding:'12px', backgroundColor: 'white', marginBottom: '1px'}}>
                                        <div style={{ width: '40%'}} >Team</div>
                                        <div style={{ width: '5%' }}>W</div>
                                        <div style={{ width: '5%' }}>L</div>
                                        <div style={{ width: '10%' }}>W%</div>
                                        <div style={{ width: '5%' }}>GB</div>
                                        <div style={{ width: '10%' }}>Home</div>
                                        <div style={{ width: '10%' }}>Away</div>
                                        <div style={{ width: '10%' }}>L10</div>
                                        <div style={{ width: '5%' }}>Streak</div>
                                    </div>
                                </>
                                            
                            : i === 15 ?
                                    <>
                                        <div style={{ backgroundColor:'#c9082a ', padding: '12px', marginBottom: '4px',  marginTop: '16px', textAlign: 'center', color: 'white' }}>WEST</div> 
                                        <div style={{ display:'flex', padding:'12px', backgroundColor: 'white', marginBottom: '1px'}}>
                                            <div style={{ width: '40%'}} >Team</div>
                                            <div style={{ width: '5%' }}>W</div>
                                            <div style={{ width: '5%' }}>L</div>
                                            <div style={{ width: '10%' }}>W%</div>
                                            <div style={{ width: '5%' }}>GB</div>
                                            <div style={{ width: '10%' }}>Home</div>
                                            <div style={{ width: '10%' }}>Away</div>
                                            <div style={{ width: '10%' }}>L10</div>
                                            <div style={{ width: '5%' }}>Streak</div>
                                        </div>
                                    </> : <></>
                            }

                            <div id='teamInStandings' style={i===6 ? {backgroundColor: team.primary} : {backgroundColor: 'white'}} key={i}>
                                <div style={{ width: '40%' }}><img style={{ width: '24px' }} src={standing.team.logo} />{standing.team.name}</div>
                                <div style={{ width: '5%' }}>{standing.conference.win}</div>
                                <div style={{ width: '5%' }}>{standing.conference.loss}</div>
                                <div style={{ width: '10%' }}>{winPercentage}%</div>
                                <div style={{ width: '5%' }}>{i < 15 ? 58 - standing.conference.win : 52 - standing.conference.win}</div>
                                <div style={{ width: '10%' }}>{standing.win.home}-{standing.loss.home}</div>
                                <div style={{ width: '10%' }}>{standing.win.away}-{standing.loss.away}</div>
                                <div style={{ width: '10%' }}>{winPercentage}</div>
                                <div style={{ width: '5%' }} id={standing.winStreak ? 'win' : 'loss'}>{standing.streak} {standing.winStreak ? 'W' : 'L'}</div>
                            </div>
                        </>
                    )
                })}
            </div> 
        </div>
    )
}

export default Standings;