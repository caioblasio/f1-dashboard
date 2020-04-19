import { fromJS } from "immutable";
import {
  FETCH_SEASON_FAILURE,
  FETCH_SEASON_SUCCESS,
  FETCH_SEASON_WAITING,
} from "./constants";

export const initialState = fromJS({
  data: {},
  isWaiting: false,
  error: "",
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SEASON_WAITING:
      return state
        .set("isWaiting", true)
        .set("error", initialState.get("error"));

    case FETCH_SEASON_SUCCESS:
      const { year, data } = payload;
      return state.set("isWaiting", false).setIn(["data", year], fromJS(data));

    case FETCH_SEASON_FAILURE:
      return state.set("isWaiting", false).set("error", payload);

    default:
      return state;
  }
};

export default reducer;
