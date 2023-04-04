import { combineReducers } from "redux";

import cart from './cart.reducer'; // shopping cart reducer root file import
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
    cart, // shopping cart reducer
})


export default rootReducer;
