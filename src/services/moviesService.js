import axios from "axios";
import config from "../config.json";

const APIENDPOINT = config.apiUrl + "/movies";

const movieUrl = (id) => {
  return `${APIENDPOINT}/${id}`;
};

export function getMovies() {
  return axios.get(APIENDPOINT);
}

export function deleteMovie(movieId) {
  return axios.delete(movieUrl(movieId));
}

export function getMovie(movieId) {
  return axios.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;

    return axios.put(movieUrl(movie._id), body);
  }
  return axios.post(`${APIENDPOINT}`, movie);
}
