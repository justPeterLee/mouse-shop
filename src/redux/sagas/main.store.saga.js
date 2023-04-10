import { put, takeEvery } from 'redux-saga/effects';

// watcher sage
function* mainStoreSaga() {
  yield takeEvery("FETCH_MAIN_PRODUCTS", fetchMainProducts);
}

// fetch all products
function* fetchMainProducts() {
  try {
    console.log('workin')
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


export default mainStoreSaga;