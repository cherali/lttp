import { call } from "redux-saga/effects";
import apiCall from "../../common/network/apiCall";
import { categoryUrl } from "../../common/urls";
import { GET_CATEGORY_LIST_FAILED, GET_CATEGORY_LIST_SUCCESS } from "../constants";

export function* getCategories() {

  yield call(apiCall, {
    method: 'get',
    url: categoryUrl,
    successType: GET_CATEGORY_LIST_SUCCESS,
    failType: GET_CATEGORY_LIST_FAILED,
  })
}
