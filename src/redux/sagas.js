import { all, takeEvery } from "@redux-saga/core/effects";
import { getCategories } from "./actions/categoriesActions";
import { addProduct, getProducts } from "./actions/productActions";
import { ADD_PRODUCT_TO_CART, GET_CATEGORY_LIST_START, GET_PRODUCTS_START } from "./constants";


export default function* rootSaga() {
  yield all([
    takeEvery(GET_CATEGORY_LIST_START, getCategories),
    takeEvery(GET_PRODUCTS_START, getProducts),
    takeEvery(ADD_PRODUCT_TO_CART, addProduct),
  ])
}
