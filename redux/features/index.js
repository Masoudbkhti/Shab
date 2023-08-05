import { combineReducers } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import SaveCardSlice from "./SaveCardSlice";

const rootReducer = combineReducers({
  SearchTerm: SearchSlice,
  SaveCard: SaveCardSlice,
});

export default rootReducer;
