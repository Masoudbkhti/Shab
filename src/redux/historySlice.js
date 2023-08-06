import {createSlice} from "@reduxjs/toolkit";
import {FRUITS} from "@/data/database";
import Apple from "@/assets/apple.jpg";

const historySlice = createSlice({
    name: 'history',
    initialState: [
        {
            userId: 1,
            historyCart: [
                {
                    id: 1,
                    items: [
                        {
                            id: 1,
                            name: 'Apple',
                            category: FRUITS,
                            price: 200,
                            image: Apple,
                            count: 2
                        }
                    ],
                    totalPrice: 400,
                    status: 'pending'
                },
                {
                    id: 2,
                    items: [
                        {
                            id: 1,
                            name: 'Apple',
                            category: FRUITS,
                            price: 200,
                            image: Apple,
                            count: 3
                        }
                    ],
                    totalPrice: 600,
                    status: 'delivered'
                },
            ]
        }
    ],
    reducers: {
        addToHistory: (state, action) => {
            const {payload} = action
            const {items, totalPrice, userId} = payload
            const index = state.findIndex( user => user.userId === userId)
            state[index].historyCart.push({
                id: Math.floor(Math.random() * 1000),
                items,
                totalPrice,
                status: 'pending'
            })
        }
    }
})


export const {addToHistory} = historySlice.actions
export default historySlice.reducer