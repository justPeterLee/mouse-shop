import { combineReducers } from "redux";

/*
--------------------
Main Store Reducer
    - will hold all products data 
    - all category
    - first page when entering shop page
--------------------
*/

function mainStore(state = [], action) {
  switch (action.type) {
    case "SET_MAIN_STORE":
      return (state = action.payload);
    case "RESET_MAIN_STORE":
      return (state = []);
    case "RESET_STORE":
      return (state = []);
    default:
      return (state = []);
  }
}

function filterStore(state = [], action) {
  switch (action.type) {
    case "SET_FILTER_STORE":
      return (state = action.payload);
    case "REST_FILTER_STORE":
      return (state = []);
    case "RESET_STORE":
      return (state = []);
    default:
      return (state = []);
  }
}

function menuCategory(state = [], action){
  switch(action.type){
    case "SET_MENU_CATEGORY":
      return state = action.payload;
    case "RESET_MENU_CATEGORY":
      return state = [];
    case "RESET_STORE":
      return state = [];
    default:
      return state = [];
  }
}

export default combineReducers({
  mainStore,
  filterStore,
  menuCategory,
});
