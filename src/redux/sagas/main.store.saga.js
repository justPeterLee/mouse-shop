import { put, takeEvery } from 'redux-saga/effects';

// watcher sage
function* mainStoreSaga() {
  yield takeEvery("FETCH_MAIN_PRODUCTS", fetchMainProducts);
  yield takeEvery("FETCH_FILTER_PRODUCT", fetchFilterProducts);
  yield takeEvery("FETCH_MENU_CATEGORY", fetchMenuCategory);
}

// fetch all products
function* fetchMainProducts() {
  try {
    const response = yield fetch("/api/routes/store/store.router", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const products = yield response.json();

    yield put({ type: "SET_MAIN_STORE", payload: products });
  } catch (err) {
    throw new Error(err.message || "Something went wrong!");
  }
}

// fetch filter products
function* fetchFilterProducts(action){
  try{
    const response = yield fetch(`/api/routes/store/storeFilter/${action.payload}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })

    const products = yield response.json();
    yield put({ type: "SET_FILTER_STORE", payload: products });
  }catch(err){
    console.log('Error with getting filterd products: ', err);
  }
}

function* fetchMenuCategory(){
  try{
    const response = yield fetch(`/api/routes/category/category/category.router`,{
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })

    const category = yield response.json();
    yield put({type: "SET_MENU_CATEGORY", payload: category})
  }catch(err){
    console.log("Error with getting menu category: ", err);
  }
}
export default mainStoreSaga;