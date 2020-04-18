import { combineReducers } from "redux";
import standingsReducer from "providers/Standings/reducer";

export default combineReducers({
  standings: standingsReducer,
});
