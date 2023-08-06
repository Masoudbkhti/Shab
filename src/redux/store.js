import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "@/redux/cartSlice";
import historySlice from "@/redux/historySlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        history: historySlice
    }
})