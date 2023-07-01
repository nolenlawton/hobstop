import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Sidebar (props) {
    const navigate = useNavigate()
    const sport = useParams().sport
    const [sidebar, setSidebar] = useState(true)
    const [sidebarSelection, setSidebarSelection] = useState(props.selection)
    const sidebarChoices = ['teams', 'players', 'standings', 'statistics', 'community']


    return (
        <>
            { sidebar ? 
            <>
                <div id="sidebar">

                    { sidebarChoices.map((choice, i) => {
                        return <div key={i} onClick={() => {setSidebarSelection(i); navigate(`/${sport}/${choice.toLowerCase()}`)}} id={sidebarSelection === i ? "selectedSport" : ''} className="sidebarChoice" >{choice}</div>
                    }) }

                    <ArrowBackIosNew onClick={() => setSidebar(false)} sx={{color: 'white', position: 'fixed', left: '218px', top: '50%', backgroundColor: 'rgb(38, 38, 38);', padding: '8px 0px 8px 0px', borderRadius: '0px 8px 8px 0px', cursor: 'pointer', fontSize: '36px', boxShadow: '2px 4px 4px black', boxShadow:'-2px -4px 2px -4px grey'}}/> 
                </div>
                <div style={{ marginRight: '240px'}}></div>
            </>
            :   <ArrowForwardIos id='arrow' onClick={() => setSidebar(true)}  sx={{color: 'white' , position: 'fixed', left: '-22px', top: '50%', backgroundColor: 'rgb(38, 38, 38);', padding: '8px 0px 8px 0px', borderRadius: '0px 8px 8px 0px', cursor: 'pointer', fontSize:'36px', boxShadow: '4px 4px 4px black'}}/> }
        </>
    );
}

export default Sidebar;