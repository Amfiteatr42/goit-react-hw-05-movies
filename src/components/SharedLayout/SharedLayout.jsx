import { Outlet } from 'react-router-dom';
import { Nav, Link, Header } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
}
