import styled from "styled-components";
import { device } from "./theme";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledMain = styled.main`
  padding: 0 48px;
  @media ${device.mobile} {
    padding: 0 24px;
  }
`;
