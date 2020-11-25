import { all, takeEvery } from "@redux-saga/core/effects";
import { getCategories } from "./actions/categoriesActions";
import { getProducts } from "./actions/productActions";
import { GET_CATEGORY_LIST_START, GET_PRODUCTS_START } from "./constants";


export default function* rootSaga() {
  yield all([
    takeEvery(GET_CATEGORY_LIST_START, getCategories),
    takeEvery(GET_PRODUCTS_START, getProducts),
  ])
}
