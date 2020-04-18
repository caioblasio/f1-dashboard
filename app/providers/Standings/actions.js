import {
  FETCH_STANDINGS,
  FETCH_STANDINGS_WAITING,
  FETCH_STANDINGS_SUCCESS,
  FETCH_STANDINGS_FAILURE,
} from "./constants";

export function fetchStandings() {
  return {
    type: FETCH_STANDINGS,
  };
}

export function fetchStandingsWaiting() {
  return {
    type: FETCH_STANDINGS_WAITING,
  };
}

export function fetchStandingsSuccess(data = []) {
  return {
    type: FETCH_STANDINGS_SUCCESS,
    payload: data,
  };
}

export function fetchStandingsFailure(message = "") {
  return {
    type: FETCH_STANDINGS_FAILURE,
    payload: message,
  };
}
