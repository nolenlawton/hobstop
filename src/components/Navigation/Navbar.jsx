import hoboLogo from '../../NBA Logos/hoboLogo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar () {
    const navigate = useNavigate()
    const sports = ['nba'];

    return (
        <div id='navbar'>
            <div id="navTitle">
                <img id="navImage" src={hoboLogo} />
                <div>hobstop</div>
            </div>

            <div id='navSports'>
                { sports.map((choice, i) => {
                    return <div key={i} onClick={() => {navigate(`/${choice}/teams`)}} id={choice === sports[i] ? "selectedSport" : ''} className="sport" >{choice}</div>
                }) }
            </div>
        </div>
    )
}

export default Navbar;