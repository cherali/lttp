import { createReducer } from "../../common/utils/reducerUtil";
import { CLEAR_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS,
  SET_PRODUCT_TO_CARD, REMOVE_PRODUCT_CART,
  PRODUCT_COUNT_PLUS, PRODUCT_COUNT_MINUS
} from "../constants";

const initialState = {
  cart: []
};

const getProductSuccess = (state, payload) => ({ ...state, products: payload }) 
const getProductFailed = state => ({ ...state, products: [] }) 
const clearProducts = state => ({ ...state, products: null })

const setProductToCart = (state, payload) => ({ ...state, cart: payload })

const removeProductFromCart = (state, payload) => {
  const cart = state.cart.filter(r => r.prod.id !== payload.productId)

  return { ...state, cart }
}

const addCount = (state, payload) => {
  const cart = [...state.cart]
  cart[payload.index].count += 1

  return { ...state, cart }
}

const minusCount = (state, payload) => {
  const cart = [...state.cart]
  cart[payload.index].count -= 1

  return { ...state, cart }
}


export default createReducer(initialState, {
  [GET_PRODUCTS_SUCCESS]: getProductSuccess,
  [GET_PRODUCTS_FAILED]: getProductFailed,
  [CLEAR_PRODUCTS]: clearProducts,

  [SET_PRODUCT_TO_CARD]: setProductToCart,
  [REMOVE_PRODUCT_CART]: removeProductFromCart,
  [PRODUCT_COUNT_PLUS]: addCount,
  [PRODUCT_COUNT_MINUS]: minusCount,
});
