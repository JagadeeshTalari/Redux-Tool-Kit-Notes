const redux = require("redux")
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED';
const RESTOCK_CAKE = 'RESTOCK_CAKE';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const RESTOCK_ICECREAM = 'RESTOCK_ICECREAM';

const initialCakeState = {
    totalQuantity: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 50,
}
// Action Creator
const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payload: {}
    }
}

const restockCake = (qty = 1) => {
    return {
        type: RESTOCK_CAKE,
        payload: {
            quantity: qty
        }
    }
}

const orderIceCream = () => {
    return {
        type: ICECREAM_ORDERED,
        payload: {}
    }
}

const restockIceCream = (qty = 1) => {
    return {
        type: RESTOCK_ICECREAM,
        payload: {
            quantity: qty
        }
    }
}

// Cake-Reducer 
const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                totalQuantity: state.totalQuantity - 1
            }
        case RESTOCK_CAKE:
            return {
                ...state,
                totalQuantity: state.totalQuantity + action.payload.quantity
            }
        default:
            return state
    }
}

// Cake-Reducer 
const iceCreamReducer = (state=initialIceCreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case RESTOCK_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload.quantity
            }
        default:
            return state
    }
}

// Combining the Reducers
const rootStore = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// 1. Redux Store Holding the Application State
const store = createStore(rootStore, applyMiddleware(logger))

// 2. Allows acces to state via getState()
console.log(`Initial State`, store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderIceCream())
store.dispatch(orderCake())

store.dispatch(restockCake(3))
store.dispatch(restockIceCream(101))
// store.dispatch(restockCake())


unsubscribe()