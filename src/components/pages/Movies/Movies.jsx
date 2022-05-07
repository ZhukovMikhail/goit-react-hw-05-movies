import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Api from 'service/api';
import { MovieGalley } from 'components/elements/MovieGallery/MovieGallery';
import { Container } from '../Home/Home.styled';
import { Form, Input, Button, Layout } from './Movies.styled';
import { Paginator } from 'components/elements/Paginator/Paginator';
import { ToastContainer } from 'react-toastify';
import * as Notify from '../../../utils/util';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/elements/Loading/Loading';
// import { data } from 'utils/arr'; was needed without Internets

const Movies = () => {
  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const [totalPage, setTotalPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  let params = new URLSearchParams(location.search);

  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(params.get('page') ?? 1);
  query === '' && params.get('query') !== null && setQuery(params.get('query'));

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.movie;
    if (value.trim() === '') {
      Notify.warnNotify();
      return;
    }
    if (value !== query) {
      setPage(1);

      setQuery(value);
      location = {
        pathname: `/movies`,
        search: `?query=${value}&page=1`,
      };
      navigate(location.search);

      setInput('');
    }
    setQuery('');
    // if (value === query) {
    //   setMovies(null);
    //   setQuery('');
    //   location.search = '';
    //   navigate(location.search);
    // }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (query === '') {
      return;
    }
    // if (location.search === '') {
    //   setQuery('');
    //   setMovies(null);
    // }

    Api.searchMovie(query, page)
      .then(r => {
        query !== '' && r.results.length === 0 && Notify.errorNotify();
        setMovies(r.results);
        setTotalPage(r.total_pages);
        setPage(r.page);
        setLoading(false);
      })
      .catch(e => {
        Notify.error404Notify(e.message);
        setError(e.message);
      });
  }, [query, page, location.search]);

  //=========== Without internet ==============
  // useEffect(() => {
  //   setMovies(data);
  //   return () => {
  //     setMovies(null);
  //   };
  // }, [query]);

  //===========================================================
  // console.log('Movies-location:', location);
  // console.log('Movies-params:', params.get('query'));
  const index = (Math.random() * (19 - 1) + 1).toFixed(0);

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
      {/* <Loader /> */}
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="movie"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={query}
        />
        <Button type="submit">Search Movie</Button>
      </Form>
      {error && <h3>{`...sorry ${error} occured`}</h3>}
      {movies?.length > 0 ? (
        <Container movies={movies} index={index}>
          {loading && <Loader />}
          <MovieGalley movies={movies} location={location} />
          <Paginator
            changePage={hendleSetPage}
            page={page}
            totalPage={totalPage}
          />
        </Container>
      ) : (
        <Layout />
      )}
    </>
  );
};
export default Movies;
