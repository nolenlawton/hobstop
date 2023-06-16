import { combineReducers } from 'redux';
import teams from './teams.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga
const rootReducer = combineReducers({
  teams
});

export default rootReducer;