import { configureStore } from "@reduxjs/toolkit";
import AlbumSlice from "./AlbumSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    SearchTerm: SearchSlice,
    AlbumSlice: AlbumSlice,
  },
});
export default store;
