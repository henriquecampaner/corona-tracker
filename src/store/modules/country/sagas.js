import { call, all, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { loadCountryFailure, loadCountrySuccess } from './action';

import api from '../../../services/api';

export function* loadCountries({ code }) {
  try {
    const { data } = yield call(api.get, `/free-api?countryTotal=${code}`);

    yield put(loadCountrySuccess(data.countrydata[0]));
  } catch (error) {
    toast.error('Something went wrong');
    yield put(loadCountryFailure());
  }
}

export default all([
  takeLatest('@country/LOAD_COUNTRY_REQUEST', loadCountries),
]);
