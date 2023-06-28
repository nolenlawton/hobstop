import './App.css'
import TeamsList from '../Teams/TeamsList';
import TeamPage from '../Teams/TeamPage';
import Players from '../Players'
import Standings from '../Standings'
import Statistics from '../Statistics'
import Community from '../Community'
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
