import { Skeletons, Page } from '../../components';
import { StyledContainer } from './Questions.styled';

const Questions = () => (
  <Page title="Questions">
    <StyledContainer>
      <Skeletons />
      <Skeletons />
      <Skeletons />
      <Skeletons />
      <Skeletons />
      <Skeletons />
    </StyledContainer>
  </Page>
);

export default Questions;
