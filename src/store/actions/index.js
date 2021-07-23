import Axios from 'react-native-axios';
import {API_URL, API_KEY} from '@env';
import {types} from '../types';

export const fetchActionMovies = () => async dispatch => {
  try {
    const result = await Axios.get(
      `${API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    );
    dispatch({
      type: types.FETCH_ACTION_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_DETAILS_ERROR,
    });
    console.log(err.message, 'kjhgf');
  }
};

export const fetchAdventureMovies = () => async dispatch => {
  try {
    const result = await Axios.get(
      `${API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
    );
    dispatch({
      type: types.FETCH_ADVENTURE_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchSciFiMovies = () => async dispatch => {
  try {
    const result = await Axios.get(
      `${API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
    );
    dispatch({
      type: types.FETCH_SCIFI_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchAnimationMovies = () => async dispatch => {
  try {
    const result = await Axios.get(
      `${API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
    );
    dispatch({
      type: types.FETCH_ANIMATION_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchDocumentaryMovies = () => async dispatch => {
  try {
    const result = await Axios.get(
      `${API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    );
    dispatch({
      type: types.FETCH_DOCUMENTARY_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchSelectedMovie = (id, onSuccess) => async dispatch => {
  try {
    const result = await Axios.get(
      `${API_URL}/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
    );
    dispatch({
      type: types.FETCH_SELECTED_MOVIE,
      payload: result.data,
    });
    return onSuccess();
  } catch (err) {
    dispatch({
      type: types.FETCH_DETAILS_ERROR,
    });
    console.log(err.message);
  }
};

export const searchForMovie =
  (keyword, onSuccess = () => {}) =>
  async dispatch => {
    try {
      const result = await Axios.get(
        `${API_URL}/3/search/keyword?api_key=${API_KEY}&query=${keyword}&page=1`,
      );
      dispatch({
        type: types.SEARCH_MOVIE,
        payload: result.data.results,
      });
      return onSuccess();
    } catch (err) {
      console.log(err);
    }
  };
