import { combineReducers } from 'redux';
import category from './categoriesReducers';
import product from './productReducers';


const rootReducers = combineReducers({
  category,
  product,
});

export default rootReducers;