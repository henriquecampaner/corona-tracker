import produce from 'immer';

const INITITAL_STATE = {
  countries: [],
  loading: false,
};

export default function countries(state = INITITAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@countries/LOAD_COUNTRIES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@countries/LOAD_COUNTRIES_SUCCESS': {
        draft.countries = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@countries/LOAD_COUNTRIES_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
