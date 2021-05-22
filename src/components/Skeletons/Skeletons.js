import React from 'react';

import { StyledContainer, StyledLoader } from './Skeletons.styled';

const Skeletons = () => (
  <StyledContainer>
    <StyledLoader width='60%' />
    <StyledLoader translucent width='90%' />
    <StyledLoader translucent width='90%' />
  </StyledContainer>
);

export default Skeletons;