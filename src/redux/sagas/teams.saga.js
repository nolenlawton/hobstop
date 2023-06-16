import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getTeams(action) {
    try {
        console.log('get teams saga')
        const teams = yield axios.get(`/`);
        console.log(teams)

        // const teams = results.data
    
        // console.log(results)


        yield put({ type: 'SET_SCORES', payload: teams });

    } catch {
        console.log('get all error');
    }
}

function* teamsSaga() {
    yield takeEvery('GET_TEAMS', getTeams)
}

export default teamsSaga