import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import rootReducer from "./features/index.js";
import { combineReducers } from "@reduxjs/toolkit";
import SearchSlice from "./features/SearchSlice";
import SaveCardSlice from "./features/SaveCardSlice";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  SearchTerm: SearchSlice,
  SaveCard: SaveCardSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});
export const persistor = persistStore(store);
export default store;
