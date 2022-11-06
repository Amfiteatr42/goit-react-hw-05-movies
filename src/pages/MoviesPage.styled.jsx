import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px 20px;
  font-size: 18px;
  border: 1px solid blueviolet;
  border-right: none;
`;
export const SearchBtn = styled.button`
  height: 45px;
  cursor: pointer;
  border: 1px solid blueviolet;

  :hover {
    color: white;
    background-color: blueviolet;
  }
`;
export const Form = styled.form`
  display: flex;
`;
export const ListItem = styled.li`
  margin-bottom: 5px;
`;
