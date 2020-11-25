import { createReducer } from "../../common/utils/reducerUtil";
import { CLEAR_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from "../constants";

const initialState = {};

const getProductSuccess = (state, payload) => ({ ...state, products: payload }) 
const getProductFailed = state => ({ ...state, products: [] }) 
const clearProducts = state => ({ ...state, products: null }) 

export default createReducer(initialState, {
  [GET_PRODUCTS_SUCCESS]: getProductSuccess,
  [GET_PRODUCTS_FAILED]: getProductFailed,
  [CLEAR_PRODUCTS]: clearProducts,
});
