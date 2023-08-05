import { combineReducers } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import SaveCardSlice from "./SaveCardSlice";
import AlbumSlice from "./AlbumSlice";

const rootReducer = combineReducers({
  SearchTerm: SearchSlice,
  SaveCard: SaveCardSlice,
  AlbumSlice: AlbumSlice,
});

export default rootReducer;
