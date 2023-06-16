import { useParams } from "react-router-dom";

function TeamPage () {
    const team = useParams()
    

    return (
        <div id="teamPage" style={{ backgroundColor : '#C8102E'}}>
            <div>{team.location} {team.name}</div>
        </div>
    )
}

export default TeamPage;