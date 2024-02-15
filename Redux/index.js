const redux = require("redux")
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED';
const RESTOCK_CAKE = 'RESTOCK_CAKE';

const initialState = {
    totalQuantity: 10,
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

// Reducer
const reducer = (state=initialState, action) => {
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

// 1. Redux Store Holding the Application State
const store = createStore(reducer)

// 2. Allows acces to state via getState()
console.log(`Initial State`, store.getState())

const unsubscribe = store.subscribe(() => console.log(`updated State, `, store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

store.dispatch(restockCake(3))
// store.dispatch(restockCake())


unsubscribe()