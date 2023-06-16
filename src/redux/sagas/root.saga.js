import { all } from 'redux-saga/effects';
import teamsSaga from './teams.saga';

export default function* rootSaga() {
  yield all([
    teamsSaga()
  ]);
}