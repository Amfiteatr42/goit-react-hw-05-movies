import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 20px;
`;
export const Link = styled(NavLink)`
  padding: 20px;

  &.active {
    color: white;
    background-color: blueviolet;
  }
`;
