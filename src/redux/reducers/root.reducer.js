import { combineReducers } from 'redux';
import teams from './teams.reducer';
import team from './team.reducer'
import players from './players.reducer'
import standings from './standings.reducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga
const rootReducer = combineReducers({
  teams,
  team,
  players,
  standings
});

export default rootReducer;