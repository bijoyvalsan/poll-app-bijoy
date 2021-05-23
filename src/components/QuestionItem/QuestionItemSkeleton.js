import React from "react";

import { StyledContainer, StyledLoader } from "./QuestionItem.styled";

const QuestionItemSkeleton = () => (
  <StyledContainer>
    <StyledLoader width="60%" />
    <StyledLoader translucent width="90%" />
    <StyledLoader translucent width="90%" />
  </StyledContainer>
);

export default QuestionItemSkeleton;
