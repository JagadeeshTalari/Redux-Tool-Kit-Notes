const redux = require("redux");
const {default: axios} = require("axios");
const thunk = require("redux-thunk").default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const InitialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailed = (errorMsg) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: errorMsg
    }
}

const fetchUsers = () => {
    return function (dispatch){
        dispatch(fetchUsersRequested())
        axios.get("https://jsonplaceholder.typicode.com/albums").then(response => {
        const users = response.data.map(user => user.id)
        dispatch(fetchUsersSuccess(users))
        })
        .catch(error => 
            dispatch(fetchUsersFailed(error.message))
            )
    }
}

const reducer = (state=InitialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    }
}

const store = createStore(reducer, applyMiddleware(thunk))



store.subscribe(() => console.log(store.getState()))

store.dispatch(fetchUsers())

