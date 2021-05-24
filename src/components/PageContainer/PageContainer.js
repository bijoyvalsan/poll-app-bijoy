import React from "react";
import PropTypes from "prop-types";

import {
  StyledContainer,
  StyledTitle,
  StyledHeaderBox
} from "./PageContainer.styled";

const PageContainer = ({ title, children, renderActions }) => (
  <StyledContainer>
    <StyledHeaderBox>
      {title ? (
        <StyledTitle data-testid="page-container-title">{title}</StyledTitle>
      ) : null}
      {renderActions ? renderActions() : null}
    </StyledHeaderBox>
    {children}
  </StyledContainer>
);

PageContainer.defaultProps = {
  title: undefined,
  renderActions: undefined
};

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  title: PropTypes.string,
  renderActions: PropTypes.func
};

export default PageContainer;
