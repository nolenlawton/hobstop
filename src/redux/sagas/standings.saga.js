import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getStandings({payload}) {
    try {
        const results = yield axios.get(`/standings`);
        const standings = results.data

        yield put({ type: 'SET_STANDINGS', payload: standings });

    } catch {
        console.log('get standings error');
    }
}

function* standingsSaga() {
    yield takeEvery('GET_STANDINGS', getStandings)
}

export default standingsSaga