import { call, all, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { loadCountryFailure, loadCountrySuccess } from './action';

import api from '../../../services/api';

// eslint-disable-next-line consistent-return
export function* loadCountries({ code }) {
  try {
    const { data } = yield call(api.get, `/free-api?countryTotal=${code}`);

    yield put(loadCountrySuccess(data.countrydata[0]));
  } catch (error) {
    if (code === 'AQ') {
      toast.warn('Sorry, there are no data here');
      return yield put(loadCountryFailure());
    }
    toast.error('Something went wrong');
    yield put(loadCountryFailure());
  }
}

export default all([
  takeLatest('@country/LOAD_COUNTRY_REQUEST', loadCountries),
]);
