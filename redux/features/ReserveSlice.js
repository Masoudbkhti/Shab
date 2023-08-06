import { createSlice } from "@reduxjs/toolkit";

const ReserveSlice = createSlice({
  name: "ReserveSlice",
  initialState: {
    trip: [
      {
        id: 1,
        count: 1,
      },
    ],
  },
  reducers: {
    addTrip: (state, action) => {
      const { payload } = action;

      const index = state.trip.findIndex((item) => item.id === payload.id);
      const isNotFound = index === -1;
      if (isNotFound) {
        state.trip.push({ ...payload, count: 1 });
      } else {
        state.trip[index].count += 1;
      }
    },
  },
});

export const { changeIconState } = ReserveSlice.actions;
export default ReserveSlice.reducer;
