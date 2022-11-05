import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/fetchMovies';

export function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  const { genres = [], runtime, title, overview, vote_average } = movieDetails;

  useEffect(() => {
    async function getMovies() {
      const moviesData = await getMovieDetails(movieId);
      setMovieDetails({ ...moviesData });
    }
    getMovies();
  }, []);
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{vote_average}</p>
        <h3>Overviews</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => `${name} `)}</p>
      </div>
      <Link to={'cast'}>Cast</Link>
      <Link to={'reviews'}>Reviews</Link>
      <Outlet />
    </>
  );
}
