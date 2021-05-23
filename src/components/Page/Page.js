import React from "react";
import PropTypes from "prop-types";

import { StyledContainer, StyledTitle } from "./Page.styled";

const Page = ({ title, children }) => (
  <StyledContainer>
    {title ? <StyledTitle>{title}</StyledTitle> : null}
    {children}
  </StyledContainer>
);

Page.defaultProps = {
  title: undefined
};

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  title: PropTypes.string
};

export default Page;
