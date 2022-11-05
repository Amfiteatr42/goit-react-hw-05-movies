import { Route, Routes } from 'react-router-dom';
import { MoviesPage } from 'pages/MoviesPage';
import { HomePage } from '../pages/HomePage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};
