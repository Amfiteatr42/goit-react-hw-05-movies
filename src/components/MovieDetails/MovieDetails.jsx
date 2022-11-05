import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/fetchMovies';

export function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const {
    genres = [],
    title,
    overview,
    vote_average,
    poster_path,
  } = movieDetails;

  useEffect(() => {
    async function getMovies() {
      const moviesData = await getMovieDetails(movieId);
      setMovieDetails({ ...moviesData });
    }
    getMovies();
  }, [movieId]);
  return (
    <>
      <div>
        <Link to={backLinkHref}>Go back</Link>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="poster"
        />
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
