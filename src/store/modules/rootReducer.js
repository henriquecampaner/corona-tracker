import { combineReducers } from 'redux';

import countries from './countries/reducer';
import country from './country/reducer';

export default combineReducers({
  countries,
  country,
});
