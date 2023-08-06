import { combineReducers } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import SaveCardSlice from "./SaveCardSlice";
import AlbumSlice from "./AlbumSlice";
import ReserveSlice from "./ReserveSlice";

const rootReducer = combineReducers({
  SearchTerm: SearchSlice,
  SaveCard: SaveCardSlice,
  AlbumSlice: AlbumSlice,
  ReserveSlice: ReserveSlice,
});

export default rootReducer;
