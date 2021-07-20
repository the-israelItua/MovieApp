import Axios from 'react-native-axios';
import {types} from '../types';

const baseUrl = process.env.REACT_APP_SERVER_URL;
const api_key = process.env.REACT_APP_API_KEY;

export const fetchActionMovies = () => async dispatch => {
  try {
    // const result = await Axios.get(
    //   `https://api.themoviedb.org/3/discover/movie?api_key=eb6182b8e207af9ca85059b249c9be18&with_genres=27`,
    // );
    // console.log(result, 'juygfd');
    console.log(baseUrl, api_key);
  } catch (err) {
    console.log(err);
  }
};

export const fetchAdventureMovies = () => async dispatch => {
  try {
    const result = await Axios.get(
      `${baseUrl}/3/discover/movie?api_key=${api_key}&with_genres=12`,
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const fetchSciFiMovies = () => async dispatch => {
  try {
    const result = await Axios.get(
      `${baseUrl}/3/discover/movie?api_key=${api_key}&with_genres=878`,
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const fetchAnimationMovies = () => async dispatch => {
  try {
    const result = await Axios.get(
      `${baseUrl}/3/discover/movie?api_key=${api_key}&with_genres=16`,
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const fetchDocumentaryMovies = () => async dispatch => {
  try {
    const result = await Axios.get(
      `${baseUrl}/3/discover/movie?api_key=${api_key}&with_genres=99`,
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
