import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getPlayers(action) {
    const date = new Date();
    const year = date.getFullYear()
    const team = action.payload

    try {
        const results = yield axios.get(`/players/${team}/${year}`);
        const players = results.data

        yield put({ type: 'SET_PLAYERS', payload: players });

    } catch {
        console.log('get all error');
    }
}

function* getAllPlayers(action) {
    const date = new Date();
    const year = date.getFullYear()

    try {
        const results = yield axios.get(`/players/${year}`);
        const players = results.data

        yield put({ type: 'SET_PLAYERS', payload: players });

    } catch {
        console.log('get all error');
    }
}

function* playersSaga() {
    yield takeEvery('GET_PLAYERS', getPlayers)
    yield takeEvery('GET_ALL_PLAYERS', getAllPlayers)

}

export default playersSaga