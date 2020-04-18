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
      .map((entry) => {})
      .toJS()
  );

export { isWaiting, getErrorMessage, getData };
