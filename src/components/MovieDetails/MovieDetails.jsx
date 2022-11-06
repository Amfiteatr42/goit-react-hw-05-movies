import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/fetchMovies';
import {
  BackLink,
  DetailsLink,
  Poster,
  SecondaryTitle,
  Wrapper,
} from './MovieDetails.styled';

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
      <BackLink to={backLinkHref}>&#8592; Go back</BackLink>
      <Wrapper>
        <Poster
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="poster"
          width="200"
        />
        <div>
          <h2>{title}</h2>
          <p>{vote_average}</p>
          <SecondaryTitle>Overviews</SecondaryTitle>
          <p>{overview}</p>
          <SecondaryTitle>Genres</SecondaryTitle>
          <p>{genres.map(({ name }) => `${name} `)}</p>
          <DetailsLink to={'cast'}>Cast</DetailsLink>
          <DetailsLink to={'reviews'}>Reviews</DetailsLink>
        </div>
      </Wrapper>
      <Outlet />
    </>
  );
}
