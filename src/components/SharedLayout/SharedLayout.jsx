import { Link, Outlet } from 'react-router-dom';

export function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
