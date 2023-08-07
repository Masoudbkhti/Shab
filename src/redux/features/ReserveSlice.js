import { createSlice } from "@reduxjs/toolkit";

const ReserveSlice = createSlice({
  name: "Reserve",
  initialState: {
    trip: [{}],
  },
  reducers: {
    addTrip: (state, action) => {
      //id
      const { payload } = action;
      const index = state.trip.findIndex((item) => item.id === payload);
      console.log(state.trip);
      const isNotFound = index === -1;
      if (isNotFound) {
        state.trip.push({ id: payload, count: 1 });
      } else {
        state.trip[index].count += 1;
      }
    },
    decreaseTrip: (state, action) => {
      //id
      const { payload } = action;
      const index = state.trip.findIndex((item) => item.id === payload);
      state.trip[index].count -= 1;
    },
  },
});

export const { addTrip, decreaseTrip } = ReserveSlice.actions;
export default ReserveSlice.reducer;
