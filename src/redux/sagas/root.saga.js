import { all } from 'redux-saga/effects';
import teamsSaga from './teams.saga';
import playersSaga from './players.saga';

export default function* rootSaga() {
  yield all([
    teamsSaga(),
    playersSaga()
  ]);
}