import { takeLatest, call, put, all } from "redux-saga/effects";
import fetchData from "utils/fetch";
import { FETCH_SEASON, apiSeasonUrl, apiRaceResultsUrl } from "./constants";
import {
  fetchSeasonSuccess,
  fetchSeasonFailure,
  fetchSeasonWaiting,
} from "./actions";

export function* fetchSeasonAPI({ payload: year }) {
  yield put(fetchSeasonWaiting());
  try {
    const season = yield call(fetchData, apiSeasonUrl(year));
    const results = yield all(
      season.MRData.RaceTable.Races.map(({ round }) =>
        call(fetchData, apiRaceResultsUrl(year, round))
      )
    );
    yield put(fetchSeasonSuccess(year, results));
  } catch (err) {
    yield put(fetchSeasonFailure(err.message));
  }
}

function* saga() {
  yield takeLatest(FETCH_SEASON, fetchSeasonAPI);
}

export default saga;
