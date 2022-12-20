import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: relative;
  width: 200px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid black;
`;

export const DropDownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: -1px;
  width: 200px;
  padding: 20px;
  text-align: center;
  background-color: teal;
  border: 1px solid black;
  color: white;
`;
