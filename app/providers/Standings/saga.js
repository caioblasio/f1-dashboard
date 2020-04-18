import { takeLatest, call, put, all } from "redux-saga/effects";
import fetchData from "utils/fetch";
import { FETCH_STANDINGS, apiStandingsUrl } from "./constants";
import {
  fetchStandingsSuccess,
  fetchStandingsFailure,
  fetchStandingsWaiting,
} from "./actions";

export function* fetchStandingsAPI() {
  yield put(fetchStandingsWaiting());

  try {
    const data = yield all(
      YEARS.map((year) => call(fetchData, apiStandingsUrl(year)))
    );
    yield put(fetchStandingsSuccess(data));
  } catch (err) {
    yield put(fetchStandingsFailure(err.message));
  }
}

function* saga() {
  yield takeLatest(FETCH_STANDINGS, fetchStandingsAPI);
}

export default saga;
