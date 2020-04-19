import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectState = ({ standings }) => standings || initialState;

const isWaiting = () =>
  createSelector(selectState, (state) => state.get("isWaiting"));
const getErrorMessage = () =>
  createSelector(selectState, (state) => state.get("error"));
const getData = () =>
  createSelector(selectState, (state) =>
    state
      .get("data")
      .map((entry) => {
        const standingsTable = entry.getIn(["MRData", "StandingsTable"]);
        const championDriverstandings = standingsTable
          .get("StandingsLists")
          .first()
          .get("DriverStandings")
          .first();
        const championDriver = championDriverstandings.get("Driver");

        return {
          year: standingsTable.get("season"),
          driver: `${championDriver.get("givenName")} ${championDriver.get(
            "familyName"
          )}`,
          team: championDriverstandings.get("Constructors").first().get("name"),
          nationality: championDriver.get("nationality"),
          points: championDriverstandings.get("points"),
          wins: championDriverstandings.get("wins"),
        };
      })
      .toJS()
  );

export { isWaiting, getErrorMessage, getData };
