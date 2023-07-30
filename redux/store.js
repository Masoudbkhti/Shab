import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
const store = configureStore({
  reducer: {
    SearchTerm: SearchSlice,
  },
});
export default store;
