const store = require("./app/store");
const {cakeActions} = require("./features/cake/cake")
const {iceCreamActions} = require("./features/iceCream/iceCream")
const fetchUsers = require("./features/users/users").fetchUsers


console.log(`Initial State`, store.getState())

const unSubscribe = store.subscribe(() => {console.log(`updated State`, store.getState())})

store.dispatch(cakeActions.orderCake())
store.dispatch(cakeActions.restoreCake(2))
store.dispatch(iceCreamActions.restoreiceCream(2))
store.dispatch(fetchUsers())