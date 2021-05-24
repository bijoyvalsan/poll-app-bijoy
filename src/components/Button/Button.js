import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-height: 50px;
  margin: 0px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  border-width: 1px;
  border-style: solid;
  background-color: black;
  color: white;
  padding: 5px;
  &:hover {
    opacity: 0.6;
  }
  &:disabled {
    opacity: 0.3;
    cursor: inherit;
  }
`;
