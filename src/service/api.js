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

export const trendingMovie = async () => {
  const { data } = await axios.get(`/trending/movie/week?api_key=${KEY}`);
  return data.results;
};

export const searchMovie = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  // console.log('searchMovie:', data);
  return data.results;
};

export const movieDetails = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${KEY}&language=en-US&append_to_response=credits,reviews`
  );
  console.log('movieDetails:', data);
  return data;
};
