import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "SearchTerm",
  initialState: "",
  reducers: {
    setValue: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setValue } = SearchSlice.actions;
export default SearchSlice.reducer;
