import styled from "styled-components";
import { device } from "../../theme";

export const StyledHeader = styled.header`
  background-color: black;
  color: white;
  padding: 24px 48px;
  h1 {
    margin: 0;
    padding: 0;
  }
  @media ${device.mobile} {
    padding: 12px 24px;
  }
`;
