import axios from "axios";

const API_KEY = "eb39f5637fce2540946148e6524f17f6";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjM5ZjU2MzdmY2UyNTQwOTQ2MTQ4ZTY1MjRmMTdmNiIsIm5iZiI6MTczMTI1NjczMC4xODI2MDksInN1YiI6IjY3MzBkMTZlYjhkNzFiNzVkNmRiYzI5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QTkYmYsmWJ1L9q5zC_naUdxeW0nzQa6dVM5pDlEz1eI",
  },
};
export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}`,
    options
  );
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1`,
    options
  );

  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
    options
  );
  return data;
};

export const getMoviesCredits = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?language=en-US&page=1&api_key=${API_KEY}`,
    options
  );
  return data.cast;
};

export const getMoviesReview = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`,
    options
  );
  return data.results;
};