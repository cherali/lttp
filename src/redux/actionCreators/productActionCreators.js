import { dispatch } from '../../index';
import {
  GET_PRODUCTS_START, CLEAR_PRODUCTS,
  ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_CART,
  PRODUCT_COUNT_PLUS, PRODUCT_COUNT_MINUS,
} from '../constants';


export const getProductsList = catId => dispatch({ type: GET_PRODUCTS_START, catId })
export const clearProductsList = () => dispatch({ type: CLEAR_PRODUCTS })

export const addProductToCart = product => dispatch({ type: ADD_PRODUCT_TO_CART, product })
export const removeProductFormCart = productId => dispatch({ type: REMOVE_PRODUCT_CART, payload: { productId } })


export const addCount = index => dispatch({ type: PRODUCT_COUNT_PLUS, payload: { index } })
export const reduceCount = index => dispatch({ type: PRODUCT_COUNT_MINUS, payload: { index } })