import hoboLogo from '../../NBA Logos/hoboLogo.png'
import { useState } from 'react'

function Navbar () {
    const sports = ['mlb', 'nba', 'nfl', 'nhl'];
    const [sportSelected, setSportSelected] = useState(1);

    return (
        <div id='navbar'>
            <div id="navTitle">
                <img id="navImage" src={hoboLogo} />
                <div>hobstop</div>
            </div>

            <div id='navSports'>
                { sports.map((choice, i) => {
                    return <div key={i} onClick={() => setSportSelected(i)} id={sportSelected === i ? "selectedSport" : ''} className="sport" >{choice}</div>
                }) }
            </div>
        </div>
    )
}

export default Navbar;