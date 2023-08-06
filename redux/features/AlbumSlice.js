import { createSlice } from "@reduxjs/toolkit";

const AlbumSlice = createSlice({
  name: "AlbumSlice",
  initialState: false,
  reducers: {
     OpenAlbum: (state, action) => {
      return state = action.payload
    },
  },
});

export const { OpenAlbum } = AlbumSlice.actions;
export default AlbumSlice.reducer;
