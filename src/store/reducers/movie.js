import {types} from '../types';

const init_state = {
  action: [],
  selectedMovie: {},
  detailsFetchError: false,
};

export const MovieReducer = (state = init_state, action) => {
  switch (action.type) {
    case types.FETCH_ACTION_MOVIES:
      return {
        ...state,
        action: action.payload,
      };
    case types.FETCH_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
        detailsFetchError: false,
      };
    case types.FETCH_DETAILS_ERROR:
      return {
        ...state,
        detailsFetchError: true,
      };
  }
  return state;
};
