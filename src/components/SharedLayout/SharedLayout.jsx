import { Outlet } from 'react-router-dom';
import { Nav, Link } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </Nav>
      </header>
      <Outlet />
    </>
  );
}
