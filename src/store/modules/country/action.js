export function loadCountryRequest(code) {
  return {
    type: '@country/LOAD_COUNTRY_REQUEST',
    code,
  };
}

export function loadCountrySuccess(data) {
  return {
    type: '@country/LOAD_COUNTRY_SUCCESS',
    payload: { data },
  };
}

export function loadCountryFailure() {
  return {
    type: '@country/LOAD_COUNTRY_FAILURE',
  };
}
