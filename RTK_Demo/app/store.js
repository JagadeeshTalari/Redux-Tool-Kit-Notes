const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cake")
const iceCreamReducer = require("../features/iceCream/iceCream")

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    }
})

module.exports = store