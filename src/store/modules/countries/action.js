export function loadCountriesRequest() {
  return {
    type: '@countries/LOAD_COUNTRIES_REQUEST',
  };
}

export function loadCountriesSuccess(data) {
  return {
    type: '@countries/LOAD_COUNTRIES_SUCCESS',
    payload: { data },
  };
}

export function loadCountriesFailure() {
  return {
    type: '@countries/LOAD_COUNTRIES_FAILURE',
  };
}
