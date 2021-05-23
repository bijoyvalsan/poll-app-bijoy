import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(12, 15, 20, 0.02) 0px 0px 0px 1px,
    rgba(12, 15, 20, 0.06) 0px 0px 1px 0px,
    rgba(12, 15, 20, 0.06) 0px 2px 2px 0px;
  padding: 0px;
  margin-bottom: 16px;
`;

export const StyledContainerItem = styled.div`
  align-items: center;
  position: relative;
  border-bottom: 1px solid #d8dde1;
  padding: 16px;
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

export const StyledDeailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledDeailsColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex: 1;
  min-width: 100px;
  box-sizing: border-box;
`;

export const StyledDeailsRow = styled.div`
  margin-right: 16px;
`;

export const StyledSubTitle = styled.p`
  font-size: 20px;
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
