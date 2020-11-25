import { createReducer } from '../../common/utils/reducerUtil'
import { GET_CATEGORY_LIST_FAILED, GET_CATEGORY_LIST_SUCCESS } from '../constants';

const initialState = {};

const getCategorySuccess = (state, payload) => ({ ...state, categoriesList: payload });
const getCategoryFailed = state => ({ ...state, categoriesList: [] });


export default createReducer(initialState, {
  [GET_CATEGORY_LIST_SUCCESS]: getCategorySuccess,
  [GET_CATEGORY_LIST_FAILED]: getCategoryFailed,
});
