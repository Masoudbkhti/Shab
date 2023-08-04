    import { createSlice } from "@reduxjs/toolkit";

    const SaveCardSlice = createSlice({
    name: "SaveCard",
    initialState: {
        carts: 
        [

            {
                isBookmark: false,
                id:1,
            }
        ]

        
    },
    reducers: {
        changeIconState: (state, action) => {
            const {payload} = action
            console.log("$$$$$$$$$$$$$$payload",payload);
            console.log("$$$$$$$$$$$$$$cart",state.carts);

            const index = state.carts.findIndex( item => item.id === payload)
            console.log("$$$$$$$$$$$$$index",index);
            const isNotFound = index === - 1
            if (isNotFound) {
                state.carts.push({id: payload, isBookmark: true})
            } else {
                state.carts[index].isBookmark = !state.carts[index].isBookmark;
            }
        
        },
    },
    });

    export const { changeIconState } = SaveCardSlice.actions;
    export default SaveCardSlice.reducer;
