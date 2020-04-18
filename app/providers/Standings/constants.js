const SCOPE = "providers/Standings";

export const FETCH_STANDINGS = `${SCOPE}/FETCH_STANDINGS`;
export const FETCH_STANDINGS_WAITING = `${SCOPE}/FETCH_STANDINGS_WAITING`;
export const FETCH_STANDINGS_SUCCESS = `${SCOPE}/FETCH_STANDINGS_SUCCESS`;
export const FETCH_STANDINGS_FAILURE = `${SCOPE}/FETCH_STANDINGS_FAILURE`;

export const apiStandingsUrl = (year) =>
  `http://ergast.com/api/f1/${year}/driverStandings`;
