import { all } from "redux-saga/effects";
import standingsSaga from "providers/Standings/saga";

export default function* () {
  yield all([standingsSaga()]);
}
