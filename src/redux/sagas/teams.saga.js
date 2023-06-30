import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getTeams(action) {
    try {
        const results = yield axios.get(`/teams`);
        const teams = results.data

        yield put({ type: 'SET_TEAMS', payload: teams });

    } catch {
        console.log('get teams error');
    }
}

function* getTeam({payload}) {
    try {
        const results = yield axios.get(`/teams/${payload.name}`);
        const team = results.data

        yield put({ type: 'SET_TEAM', payload: team });

    } catch {
        console.log('get team error');
    }
}

function* teamsSaga() {
    yield takeEvery('GET_TEAMS', getTeams)
    yield takeEvery('GET_TEAM', getTeam)
}

export default teamsSaga