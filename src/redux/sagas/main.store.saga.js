import { put, takeEvery } from 'redux-saga/effects';

// watcher sage
function* mainStoreSaga() {
  yield takeEvery("FETCH_MAIN_PRODUCTS", fetchMainProducts);
  yield takeEvery("FETCH_FILTER_PRODUCT", fetchFilterProducts);
}

// fetch all products
function* fetchMainProducts() {
  try {
    const response = yield fetch("/api/routes/store", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const products = yield response.json();

    console.log(products);
    yield put({ type: "SET_MAIN_STORE", payload: products });
  } catch (err) {
    throw new Error(err.message || "Something went wrong!");
  }
}

// fetch filter products
function* fetchFilterProducts(){
  try{

  }catch(err){
    console.log('Error with getting filterd products: ', err);
  }
}

export default mainStoreSaga;