import {types} from '../types';

const init_state = {
  action: [],
  adventure: [],
  animation: [],
  scifi: [],
  documentary: [],
  selectedMovie: {},
  searchedMovies: [],
  detailsFetchError: false,
};

export const MovieReducer = (state = init_state, action) => {
  switch (action.type) {
    case types.FETCH_ACTION_MOVIES:
      return {
        ...state,
        action: action.payload,
      };
    case types.FETCH_ADVENTURE_MOVIES:
      return {
        ...state,
        adventure: action.payload,
      };
    case types.FETCH_DOCUMENTARY_MOVIES:
      return {
        ...state,
        documentary: action.payload,
      };
    case types.FETCH_SCIFI_MOVIES:
      return {
        ...state,
        scifi: action.payload,
      };
    case types.FETCH_ANIMATION_MOVIES:
      return {
        ...state,
        animation: action.payload,
      };
    case types.FETCH_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
        detailsFetchError: false,
      };
    case types.SEARCH_MOVIE:
      return {
        ...state,
        searchedMovies: action.payload,
      };
    case types.FETCH_DETAILS_ERROR:
      return {
        ...state,
        detailsFetchError: true,
      };
  }
  return state;
};
