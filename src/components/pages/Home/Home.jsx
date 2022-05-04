import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieGalley } from 'components/elements/MovieGallery/MovieGallery';
import * as Api from 'service/api';
import { Container, Select, Box } from './Home.styled';
import { Paginator } from 'components/elements/Paginator/Paginator';
import { Loader } from 'components/elements/Loading/Loading';

// import { data } from 'utils/arr'; was neded without Internet

export const Home = () => {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState('tranding');
  const location = useLocation();
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (query === 'tranding') {
      Api.trendingMovie(page)
        .then(r => {
          setMovies(r.results);
          setPage(r.page);
          setTotalPage(r.total_pages);
          setLoading(false);
        })
        .catch(e => setError(e.message));
      console.log('useEffect:[tranding]');
      return;
    }

    if (query !== 'tranding') {
      Api.OtherMovies(query, page)
        .then(r => {
          setMovies(r.results);
          setPage(r.page);
          setTotalPage(r.total_pages);
          setLoading(false);
        })
        .catch(e => setError(e.message));
      console.log('useEffect:[other]');
    }
  }, [page, query]);

  //=========== As far as i don`t have internet ==============
  // useEffect(() => {
  //   setMovies(data);
  // }, []);
  //===========================================================

  const index = (Math.random() * (19 - 1) + 1).toFixed(0);
  const handleSelect = e => {
    const { value } = e.target;
    if (value !== query) {
      setPage(1);
      setQuery(value);
    }
  };

  return (
    movies && (
      <Container movies={movies && movies} index={index}>
        {loading && <Loader />}
        <Box>
          <Select name="Choose category" id="" onChange={handleSelect}>
            <option value="tranding">Tranding movies</option>
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="upcoming">Upcoming</option>
          </Select>
        </Box>
        {error && <h3>{`...sorry ${error} occured`}</h3>}
        {movies && (
          <MovieGalley movies={movies} location={location} to={'movies/'} />
        )}

        <Paginator
          changePage={data => setPage(data)}
          page={page}
          totalPage={totalPage}
        />
      </Container>
    )
  );
};
