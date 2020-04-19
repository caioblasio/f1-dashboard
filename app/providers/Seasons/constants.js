const SCOPE = "providers/Seasons";

export const FETCH_SEASON = `${SCOPE}/FETCH_SEASON`;
export const FETCH_SEASON_WAITING = `${SCOPE}/FETCH_SEASON_WAITING`;
export const FETCH_SEASON_SUCCESS = `${SCOPE}/FETCH_SEASON_SUCCESS`;
export const FETCH_SEASON_FAILURE = `${SCOPE}/FETCH_SEASON_FAILURE`;

export const apiSeasonUrl = (year) => `http://ergast.com/api/f1/${year}.json`;
export const apiRaceResultsUrl = (year, round) =>
  `http://ergast.com/api/f1/${year}/${round}/results.json`;
