import { all } from 'redux-saga/effects';

import countries from './countries/sagas';
import country from './country/sagas';

export default function* rootSaga() {
  return yield all([countries, country]);
}
