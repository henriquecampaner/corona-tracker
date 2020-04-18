import { call, all, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { loadCountriesFailure, loadCountriesSuccess } from './action';

import api from '../../../services/api';

export function* loadCountries() {
  try {
    const { data: response } = yield call(
      api.get,
      '/free-api?countryTotals=ALL'
    );

    const countriestoArray = Object.values(response.countryitems[0]);

    const countriesDecreasingCases = countriestoArray.sort(
      (a, b) => b.total_cases - a.total_cases
    );

    yield put(loadCountriesSuccess(countriesDecreasingCases));
  } catch (error) {
    toast.error('Something went wrong');
    yield put(loadCountriesFailure());
  }
}

export default all([
  takeLatest('@countries/LOAD_COUNTRIES_REQUEST', loadCountries),
]);
