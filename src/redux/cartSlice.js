import {createSlice} from "@reduxjs/toolkit";
import Apple from "@/assets/apple.jpg";
import {FRUITS} from "@/data/database";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        userId: 1,
        cart: [
            {
                id: 1,
                name: 'Apple',
                category: FRUITS,
                price: 200,
                image: Apple,
                count: 2
            }
        ]
    },
    reducers: {
        addToCart: (state, action) => {
            //product obj
            const {payload} = action
            const index = state.cart.findIndex(item => item.id === payload.id)
            const isNotFound = index === -1
            if (isNotFound) {
                state.cart.push({...payload, count: 1})
            } else {
                state.cart[index].count += 1
            }
        },
        decreaseItem: (state, action) => {
            //id
            const {payload} = action
            const index = state.cart.findIndex(item => item.id === payload)
            state.cart[index].count -= 1
        },
        removeItem: (state, action) => {
            //id
            const {payload} = action
            const index = state.cart.findIndex(item => item.id === payload)
            state.cart.splice(index, 1)
        },
        reset: (state) => {
            state.cart.length = 0
        }
    }
})

export const {addToCart, decreaseItem, removeItem, reset} = cartSlice.actions
export default cartSlice.reducer