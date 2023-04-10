import { combineReducers } from "redux";

//cart
import cart from './cart.reducer'; // shopping cart reducer root file import

// store 
import mainStore from './main.store.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
    cart, // shopping cart reducer
    mainStore, // main store reducer
})


export default rootReducer;
