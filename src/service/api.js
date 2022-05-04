import axios from 'axios';

export const KEY = 'c49a81302c69c8f0b079b665aea8a7dd';

export const IMG_BASE_URL = `https://image.tmdb.org/t/p`;
export const IMG_W500 = `/w500`;
export const IMG_W400 = `/w400`;
export const IMG_W300 = `/w300`;
export const IMG_W200 = `/w200`;
export const IMG_W100 = `/w100`;
export const IMG_ORIG = `/original`;

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const trendingMovie = async (page = 1) => {
  const { data } = await axios.get(
    `/trending/movie/week?api_key=${KEY}&page=${page}`
  );
  console.log('response trendingMovie', data);
  return data;
};

export const searchMovie = async (query, page) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  console.log('response searchMovie', data);
  return data;
};

export const movieDetails = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${KEY}&language=en-US&append_to_response=credits,reviews`
  );
  console.log('response movieDetails', data);
  return data;
};

export const moviesIndx = (movies, index) => {
  if (movies?.[index]?.poster_path) {
    return `${IMG_BASE_URL}${IMG_ORIG}${movies[index].poster_path}`;
  }
  // return 'https://planbphoto.com/wp-content/uploads/Serze.jpg';
  return 'https://materials.basov.com.ua/images/silhouette-map-of-ukraine-vector-illustration-blue-yellow.jpg';
};

export const latestMovies = async () => {
  const { data } = await axios.get(
    `/movie/latest?api_key=${KEY}&language=en-US`
  );
  console.log('response latestMovies', data);
  return data.results;
};

export const OtherMovies = async (value, page) => {
  const { data } = await axios.get(
    `/movie/${value}?api_key=${KEY}&language=en-US&page=${page}`
  );
  console.log('response OtherMovies', data);
  return data;
};
