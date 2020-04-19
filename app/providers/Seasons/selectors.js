import { createSelector } from "reselect";
import { initialState } from "./reducer";
import { fromJS } from "immutable";

const selectState = ({ seasons }) => seasons || initialState;

const isWaiting = () =>
  createSelector(selectState, (state) => state.get("isWaiting"));
const getErrorMessage = () =>
  createSelector(selectState, (state) => state.get("error"));
const getData = (year) =>
  createSelector(getSeasonData(year), (state) =>
    state
      .map((entry) => {
        const race = entry.getIn(["MRData", "RaceTable", "Races"]).first();
        const championResults = race.get("Results").first();

        return {
          round: race.get("round"),
          raceName: race.get("raceName"),
          driver: `${championResults.getIn([
            "Driver",
            "givenName",
          ])} ${championResults.getIn(["Driver", "familyName"])}`,
          nationality: championResults.getIn(["Driver", "nationality"]),
          team: championResults.getIn(["Constructor", "name"]),
          wins: championResults.getIn(["Time", "time"]),
        };
      })
      .toJS()
  );

const getSeasonData = (year) =>
  createSelector(selectState, (state) =>
    state.get("data").has(year) ? state.getIn(["data", year]) : fromJS([])
  );

export { isWaiting, getErrorMessage, getData };
