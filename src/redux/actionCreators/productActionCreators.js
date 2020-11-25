import { dispatch } from '../../index';
import { GET_PRODUCTS_START, CLEAR_PRODUCTS } from '../constants';


export const getProductsList = catId => dispatch({ type: GET_PRODUCTS_START, catId })
export const clearProductsList = () => dispatch({ type: CLEAR_PRODUCTS })