import './App.css'
import TeamsList from '../TeamsPage/TeamsList';
import TeamPage from '../TeamsPage/TeamPage';
import Players from '../PlayersPage/Players'
import Standings from '../StandingsPage/Standings'
import Statistics from '../StatisticsPage/Statistics'
import Community from '../CommunityPage/Community'
import { Route, Routes } from 'react-router';
import Navbar from '../Navigation/Navbar';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route exact path='/:sport/teams' element={<TeamsList/>} />
        <Route exact path='/:sport/players' element={<Players/>} />
        <Route exact path='/:sport/standings' element={<Standings/>} />
        <Route exact path='/:sport/statistics' element={<Statistics/>} />
        <Route exact path='/:sport/community' element={<Community/>} />



        <Route exact path='/:sport/:name' element={<TeamPage/>} />
      </Routes>
    </>
  );
}

export default App;
