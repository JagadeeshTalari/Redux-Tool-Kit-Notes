const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    noOfCakes: 49
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        orderCake: (state) => {
            state.noOfCakes--
        },
        restoreCake: (state, action) => {
            state.noOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions