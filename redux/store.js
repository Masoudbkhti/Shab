import { configureStore } from "@reduxjs/toolkit";

import SearchSlice from "./SearchSlice";
import ModalSearchSlice from "./ModalSearchSlice";
const store = configureStore({
  reducer: {
    SearchTerm: SearchSlice,
    ModalSearch: ModalSearchSlice,
  },
});
export default store;
