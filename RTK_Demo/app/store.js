const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cake")
const iceCreamReducer = require("../features/iceCream/iceCream")
const userReducer = require("../features/users/users")

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        users: userReducer
    }
})

module.exports = store