import { createSlice } from "@reduxjs/toolkit";

const ReserveSlice = createSlice({
  name: "Reserve",
  initialState: {
    trip: [],
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
    submitTrip: (state, action) => {
      //resdata
      const { payload } = action;
      const index = state.trip.findIndex((item) => item.id === payload.data.id);

      state.trip[index] = {
        ...state.trip[index],
        enterDate: payload.enterDate,
        exitDate: payload.exitDate,
        sumResult: payload.sumResult,
      };
    },
  },
});

export const { addTrip, decreaseTrip, submitTrip } = ReserveSlice.actions;
export default ReserveSlice.reducer;
