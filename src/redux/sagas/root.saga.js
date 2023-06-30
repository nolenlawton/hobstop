import { all } from 'redux-saga/effects';
import teamsSaga from './teams.saga';
import playersSaga from './players.saga';
import standingsSaga from './standings.saga';

export default function* rootSaga() {
  yield all([
    teamsSaga(),
    playersSaga(),
    standingsSaga()
  ]);
}