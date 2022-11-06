import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Link, Header, Container } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </Nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
