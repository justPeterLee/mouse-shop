import { combineReducers } from "redux";

/* Shopping Cart (cart) reducer
    - toggle shopping cart
        - display or hide the view of cart modal
*/


// toggle the view of the cart
function toggleCart(state=false, action){
    switch(action.type){
        case "SHOW_CART":
            return state = true;
        case "HIDE_CART":
            return state = false;
        default:
            return state;
    }
}

export default combineReducers({
    toggleCart,
})