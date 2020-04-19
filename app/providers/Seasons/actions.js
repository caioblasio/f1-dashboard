import {
  FETCH_SEASON,
  FETCH_SEASON_WAITING,
  FETCH_SEASON_SUCCESS,
  FETCH_SEASON_FAILURE,
} from "./constants";

export function fetchSeason(year) {
  return {
    type: FETCH_SEASON,
    payload: year,
  };
}

export function fetchSeasonWaiting() {
  return {
    type: FETCH_SEASON_WAITING,
  };
}

export function fetchSeasonSuccess(year, data = []) {
  return {
    type: FETCH_SEASON_SUCCESS,
    payload: {
      year,
      data,
    },
  };
}

export function fetchSeasonFailure(message = "") {
  return {
    type: FETCH_SEASON_FAILURE,
    payload: message,
  };
}
