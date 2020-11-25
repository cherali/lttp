import { dispatch } from '../../index';
import { GET_CATEGORY_LIST_START } from '../constants';


export const getCategoryList = () => dispatch({ type: GET_CATEGORY_LIST_START })

