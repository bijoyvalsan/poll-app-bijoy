import styled, { keyframes, css } from "styled-components";
import { device } from "../../theme";

const pulse = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
`;

export const StyledContainer = styled.div`
  background-color: white;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  margin: 12px;
  padding: 16px;
  max-width: 300px;
  min-width: 300px;
  box-sizing: border-box;
  cursor: ${({ pointer }) => (pointer ? "pointer" : "inherit")};
  @media ${device.mobile} {
    max-width: 250px;
    min-width: 250px;
  }
`;

const StyledItem = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: ${props =>
    props.translucent
      ? css`linear-gradient(-90deg, #DEDEDE 0%, #F8F8F8 50%, #DEDEDE 100%)`
      : css`linear-gradient(-90deg, #F1F1F1 0%, #F8F8F8 50%, #F1F1F1 100%)`};
  background-size: 400% 400%;
  animation: ${pulse} 2s ease-in-out 0s infinite;
`;

export const StyledLoader = styled(StyledItem)`
  width: ${({ width }) => width || "70px"};
  height: ${({ height }) => height || "20px"};
  border-radius: ${({ radius }) => radius || "20px"};
  margin: 8px;
  &::before {
    ${() =>
      css`
        content: "\00a0";
      `}
  }
`;

export const StyledQuestionTitle = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
`;

export const StyledQuestionPublishDate = styled.span`
  opacity: 0.6;
`;

export const StyledQuestionChoices = styled.span`
  opacity: 0.6;
`;
