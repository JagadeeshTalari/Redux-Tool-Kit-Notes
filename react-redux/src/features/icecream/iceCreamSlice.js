import { createSlice } from "@reduxjs/toolkit"
import {ordered as cakeOrdered} from "../cake/cakeSlice"

const initialState = {
    noOfIceCreams: 40
}

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: state => {
            state.noOfIceCreams--
        },
        restocked: (state, action) => {
            state.noOfIceCreams += action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(cakeOrdered, state => {
            state.noOfIceCreams--
        })
    }
})

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions