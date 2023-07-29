import { createSlice } from "@reduxjs/toolkit";
const ModalSearchSlice = createSlice({
  name: "ModalSearch",
  initialState : false,
  reducers: {
    OpenModal: (state ,actions) => {
      return state = actions.payload
    },
  },
});

export const { OpenModal, CloseModal } = ModalSearchSlice.actions;
export default ModalSearchSlice.reducer;
