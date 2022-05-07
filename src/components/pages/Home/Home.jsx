import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MovieGalley } from 'components/elements/MovieGallery/MovieGallery';
import * as Api from 'service/api';
import { Container, Select, Box } from './Home.styled';
import { Paginator } from 'components/elements/Paginator/Paginator';
import { Loader } from 'components/elements/Loading/Loading';
import * as Notify from '../../../utils/util';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { data } from 'utils/arr'; was neded without Internet

const Home = () => {
  const [movies, setMovies] = useState();
  let location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(null);
  let params = new URLSearchParams(location.search);
  const [query, setQuery] = useState(params.get('query') ?? 'tranding');
  const [page, setPage] = useState(params.get('page') ?? 1);

  console.log('location:', location);
  console.log("params.get('query'):", params.get('query'));

  useEffect(() => {
    setLoading(true);
    setError(false);

    if (query === 'tranding' || location.search === '') {
      if (location.search === '') {
        setPage(1);
      }
      setQuery('tranding');
      Api.trendingMovie(page)
        .then(r => {
          setMovies(r.results);
          setPage(r.page);
          setTotalPage(r.total_pages);
          setLoading(false);
        })
        .catch(e => {
          setError(e.message);
          Notify.error404Notify(e.message);
          setLoading(false);
        });
      // console.log('useEffect:[tranding]');
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
        .catch(e => {
          setLoading(false);
          setError(e.message);
          Notify.error404Notify(e.message);
        });
      // console.log('useEffect:[other]');
    }
  }, [location.search, page, query]);

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
    location.search = `?query=${value}&page=1`;

    navigate(location.search);
  };

  const hendleSetPage = data => {
    setPage(data);
    location = {
      search: `?query=${query}&page=${data}`,
    };
    navigate(location.search);
  };

  return (
    <>
      <ToastContainer />
      {movies && (
        <Container movies={movies && movies} index={index}>
          {loading && <Loader />}
          <Box>
            <Select
              name="Choose category"
              id="select"
              onChange={handleSelect}
              value={query}
            >
              <option value="tranding">Tranding movies</option>
              <option value="popular">Popular</option>
              <option value="top_rated">Top Rated</option>
              <option value="upcoming">Upcoming</option>
            </Select>
          </Box>
          {error ? (
            <h3
              style={{ color: 'white', textAlign: 'center' }}
            >{`...sorry ${error} occured`}</h3>
          ) : (
            movies && (
              <>
                <MovieGalley
                  movies={movies}
                  location={location}
                  to={'/movies/'}
                />
                <Paginator
                  changePage={hendleSetPage}
                  page={page}
                  totalPage={totalPage}
                />
              </>
            )
          )}
        </Container>
      )}
    </>
  );
};
export default Home;
