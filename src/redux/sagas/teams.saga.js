import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getTeams(action) {
    try {
        const results = yield axios.get(`/teams`);
        const teams = results.data

        yield put({ type: 'SET_TEAMS', payload: teams });

    } catch {
        console.log('get all error');
    }
}

function* teamsSaga() {
    yield takeEvery('GET_TEAMS', getTeams)
}

export default teamsSaga