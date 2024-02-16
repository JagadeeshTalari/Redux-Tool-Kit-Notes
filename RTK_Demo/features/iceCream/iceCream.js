const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    noOficeCreams: 29
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordericeCream: (state) => {
            state.noOficeCreams--
        },
        restoreiceCream: (state, action) => {
            state.noOficeCreams += action.payload
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions