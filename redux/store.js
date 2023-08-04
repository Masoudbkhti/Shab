import { configureStore } from "@reduxjs/toolkit";

import SearchSlice from "./SearchSlice";
import SaveCardSlice from "./features/SaveCardSlice";
const store = configureStore({
  reducer: {
    SearchTerm: SearchSlice,
    SaveCard: SaveCardSlice
  },
});
export default store;
