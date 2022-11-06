import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
`;
export const BackLink = styled(NavLink)`
  display: inline-block;
  border: 1px solid blueviolet;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 30px;

  :hover {
    color: white;
    background-color: blueviolet;
  }
`;
export const Poster = styled.img`
  width: 200px;
  margin-right: 40px;
`;
export const SecondaryTitle = styled.h3`
  margin-top: 35px;
  margin-bottom: 0;
`;
export const DetailsLink = styled(NavLink)`
  display: inline-block;
  border: 1px solid blueviolet;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-right: 10px;

  &.active {
    color: white;
    background-color: blueviolet;
  }

  :hover {
    color: white;
    background-color: blueviolet;
  }
`;
