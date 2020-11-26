import { call, select, put } from "redux-saga/effects";
import apiCall from "../../common/network/apiCall";
import { productUrl } from "../../common/urls";
import { GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS,
  SET_PRODUCT_TO_CARD,
} from "../constants";

export function* getProducts({ catId }) {
  yield call(apiCall, {
    method: 'get',
    url: `${productUrl}?categories=${catId}`,
    successType: GET_PRODUCTS_SUCCESS,
    failType: GET_PRODUCTS_FAILED,
    cancelable: true,
  })
}

export function* addProduct({ product }){
  // get list of cart porducts
  const cartList = yield select(s => s.product?.cart) || []

  // find index of product in vartlist
  const index = yield cartList.findIndex(r => r?.prod?.id === product.id)

  // if index > -1 item already exist so add one to count of it
  if (index > - 1) {
    cartList[index].count += 1
  } else {
    // push to cart list if product does not exist
    cartList.push({
      count: 1,
      prod: product
    })
  }

  yield put({ type: SET_PRODUCT_TO_CARD, payload: cartList })
}
