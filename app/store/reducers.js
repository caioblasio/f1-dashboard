import { combineReducers } from "redux";
import standingsReducer from "providers/Standings/reducer";
import seasonsReducer from "providers/Seasons/reducer";

export default combineReducers({
  standings: standingsReducer,
  seasons: seasonsReducer,
});
