import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Api from 'service/api';
import { MovieGalley } from 'components/elements/MovieGallery/MovieGallery';
// import { data } from 'utils/arr'; was needed without Internet
import { Container } from '../Home/Home.styled';
import { Form, Input, Button, Layout } from './Movies.styled';
import { Paginator } from 'components/elements/Paginator/Paginator';
import { ToastContainer } from 'react-toastify';
import { warnNotify, errorNotify } from '../../../utils/util';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/elements/Loading/Loading';

export const Movies = () => {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState('');
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  let params = new URLSearchParams(location.search);

  query === '' && params.get('query') !== null && setQuery(params.get('query'));

  const onSubmit = e => {
    e.preventDefault();

    const { value } = e.target.elements.movie;
    if (value.trim() === '') {
      warnNotify();
      return;
    }
    value !== query && setPage(1);
    setQuery(value);
    location = {
      pathname: `/movies`,
      search: `?query=${value}`,
    };
    navigate(location.search);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (query === '') {
      return;
    }

    Api.searchMovie(query, page)
      .then(r => {
        query !== '' && r.results.length === 0 && errorNotify();
        setMovies(r.results);
        setTotalPage(r.total_pages);
        setPage(r.page);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message);
      });
  }, [query, page]);

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

  return (
    <>
      <ToastContainer />
      {/* <Loader /> */}
      <Form onSubmit={onSubmit}>
        <Input type="text" name="movie" />
        <Button type="submit">Search Movie</Button>
      </Form>
      {error && <h3>{`...sorry ${error} occured`}</h3>}
      {movies?.length > 0 ? (
        <Container movies={movies} index={index}>
          {loading && <Loader />}
          <MovieGalley movies={movies} location={location} />
          <Paginator
            changePage={data => setPage(data)}
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
