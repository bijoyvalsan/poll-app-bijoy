import styled from "styled-components";

export const StyledLabelText = styled.p`
  margin: 0 0 12px 0;
`;

export const StyledContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
  input[type="text"] {
    appearance: none;
    background-color: white;
    border: none;
    outline: 0px;
    border-radius: 8px;
    padding: 12px;
    width: 100%;
    margin: 0px;
    font-size: 16px;
    line-height: 24px;
    box-shadow: rgb(153 153 153) 0px 0px 0px 1px;
    box-sizing: border-box;
  }
  input[type="text"]:focus {
    box-shadow: #3388ff 0px 0px 0px 2px;
  }
`;
