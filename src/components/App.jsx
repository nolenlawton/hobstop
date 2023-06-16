import './App.css'
import TeamsList from './TeamsList';
import TeamPage from './TeamPage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <h1 id="homeTitle">NBA World</h1>
      <Routes>
        <Route exact path='/nba' element={<TeamsList/>} />

        <Route exact path='/nba/:location/:name' element={<TeamPage/>} />
      </Routes>
    </>
  );
}

export default App;
