import { all, takeEvery } from "@redux-saga/core/effects";
import { getCategories } from "./actions/categoriesActions";
import { GET_CATEGORY_LIST_START } from "./constants";


export default function* rootSaga() {
  yield all([
    takeEvery(GET_CATEGORY_LIST_START, getCategories)
  ])
}
