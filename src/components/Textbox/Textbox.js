import React from "react";
import PropTypes from "prop-types";

import { StyledContainer, StyledLabelText } from "./Textbox.styled";

const Textbox = ({ placeholder, onChange, value, label }) => {
  return (
    <>
      {label && <StyledLabelText>{label}</StyledLabelText>}
      <StyledContainer>
        <input
          data-testid="text-input"
          aria-label={placeholder}
          onChange={onChange}
          tabIndex="0"
          type="text"
          placeholder={placeholder}
          value={value}
        />
      </StyledContainer>
    </>
  );
};

Textbox.defaultProps = {
  placeholder: "search",
  value: "",
  label: undefined
};

Textbox.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default React.memo(Textbox);
