const redux = require("redux");
const createStore = redux.createStore
const produce = require("immer").produce

const initialState = {
    name: "Jagadeesh",
    address: {
        street: "Street Name",
        village: "Village Name",
        City: "City Name"
    }
}

const UPDATE_STREET = "UPDATE_STREET";
const updateAddress = () => {
    return {
        type: UPDATE_STREET,
        payload: {
            newStreet: "New Street Name"
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        // ```Without Immer```
        // case UPDATE_STREET:
        //     return {
        //         ...state,
        //         address: {
        //             ...state.address,
        //             street: action.payload.newStreet
        //         }
        //     }
        // ```With Immer```
        case UPDATE_STREET:
            return produce(state, (draft) => {
                draft.address.street = action.payload.newStreet
            })
        default:
            return state;
    }
}

const store = createStore(reducer)

console.log(`Initial State`, store.getState())
const unsubscribe = store.subscribe(() => console.log(`updated state`, store.getState()));

store.dispatch(updateAddress())

unsubscribe()