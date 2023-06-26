import './App.css'
import TeamsList from './TeamsList';
import TeamPage from './TeamPage';
import { Route, Routes } from 'react-router';
import logo from '../NBA Logos/hoboLogo.png'

function App() {
  return (
    <>
      {/* navbar of ALL pages */}
      <h1 id="homeTitle">
        <img id="navImage" width='4%' src={logo} />
      </h1>
      <Routes>
        <Route exact path='/' element={<TeamsList/>} />

        <Route exact path='/:location/:name' element={<TeamPage/>} />
      </Routes>
    </>
  );
}

export default App;
