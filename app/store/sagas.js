import { all } from "redux-saga/effects";
import standingsSaga from "providers/Standings/saga";
import seasonsSaga from "providers/Seasons/saga";

export default function* () {
  yield all([standingsSaga(), seasonsSaga()]);
}
