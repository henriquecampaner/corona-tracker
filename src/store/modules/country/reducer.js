import produce from 'immer';

const INITITAL_STATE = {
  country: [],
  loading: false,
};

export default function countries(state = INITITAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@country/LOAD_COUNTRY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@country/LOAD_COUNTRY_SUCCESS': {
        draft.country = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@country/LOAD_COUNTRY_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
