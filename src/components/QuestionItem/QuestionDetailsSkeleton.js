import React from "react";

import { StyledLoader } from "./QuestionItem.styled";
import {
  StyledDeailsContainer,
  StyledDeailsColumn,
  StyledDeailsRow,
  StyledBox,
  StyledContainer,
  StyledContainerItem
} from "./QuestionDetails.styled";

const QuestionDetailsSkeleton = () => (
  <StyledBox>
    <div>
      <StyledLoader width="100px" />
    </div>
    <StyledContainer>
      <StyledContainerItem>
        <StyledDeailsContainer>
          <StyledDeailsColumn>
            <StyledDeailsRow>
              <StyledLoader translucent width="100px" />
            </StyledDeailsRow>
          </StyledDeailsColumn>
          <StyledDeailsColumn>
            <StyledDeailsRow>
              <StyledLoader translucent width="100px" />
            </StyledDeailsRow>
          </StyledDeailsColumn>
          <StyledDeailsColumn>
            <StyledDeailsRow>
              <StyledLoader translucent width="100px" />
            </StyledDeailsRow>
          </StyledDeailsColumn>
        </StyledDeailsContainer>
      </StyledContainerItem>
      <StyledContainerItem>
        <StyledDeailsContainer>
          <StyledDeailsColumn>
            <StyledDeailsRow>
              <StyledLoader translucent width="100px" />
            </StyledDeailsRow>
          </StyledDeailsColumn>
          <StyledDeailsColumn>
            <StyledDeailsRow>
              <StyledLoader translucent width="100px" />
            </StyledDeailsRow>
          </StyledDeailsColumn>
          <StyledDeailsColumn>
            <StyledDeailsRow>
              <StyledLoader translucent width="100px" />
            </StyledDeailsRow>
          </StyledDeailsColumn>
        </StyledDeailsContainer>
      </StyledContainerItem>
      <StyledContainerItem>
        <StyledDeailsContainer>
          <StyledDeailsColumn>
            <StyledDeailsRow>
              <StyledLoader translucent width="100px" />
            </StyledDeailsRow>
          </StyledDeailsColumn>
          <StyledDeailsColumn>
            <StyledDeailsRow>
              <StyledLoader translucent width="100px" />
            </StyledDeailsRow>
          </StyledDeailsColumn>
          <StyledDeailsColumn>
            <StyledDeailsRow>
              <StyledLoader translucent width="100px" />
            </StyledDeailsRow>
          </StyledDeailsColumn>
        </StyledDeailsContainer>
      </StyledContainerItem>
    </StyledContainer>
  </StyledBox>
);

export default QuestionDetailsSkeleton;
