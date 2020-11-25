import { call } from "redux-saga/effects";
import apiCall from "../../common/network/apiCall";
import { productUrl } from "../../common/urls";
import { GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from "../constants";

export function* getProducts({ catId }) {
  yield call(apiCall, {
    method: 'get',
    url: `${productUrl}?categories=${catId}`,
    successType: GET_PRODUCTS_SUCCESS,
    failType: GET_PRODUCTS_FAILED,
    cancelable: true,
  })
}
