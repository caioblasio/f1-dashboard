import { fromJS } from "immutable";
import {
  FETCH_STANDINGS_FAILURE,
  FETCH_STANDINGS_SUCCESS,
  FETCH_STANDINGS_WAITING,
} from "./constants";

export const initialState = fromJS({
  data: [],
  isWaiting: false,
  error: "",
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STANDINGS_WAITING:
      return state
        .set("isWaiting", true)
        .set("error", initialState.get("error"));

    case FETCH_STANDINGS_SUCCESS:
      const currData = state.get("data");
      return state
        .set("isWaiting", false)
        .set("data", currData.merge(fromJS(payload)));

    case FETCH_STANDINGS_FAILURE:
      return state.set("isWaiting", false).set("error", payload);

    default:
      return state;
  }
};

export default reducer;
