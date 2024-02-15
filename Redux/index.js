const redux = require("redux")
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED';

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

// Reducer
const reducer = (state=initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                totalQuantity: state.totalQuantity - 1
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

unsubscribe()

store.dispatch(orderCake())