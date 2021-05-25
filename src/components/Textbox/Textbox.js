import React from "react";
import PropTypes from "prop-types";

import { StyledContainer, StyledLabelText } from "./Textbox.styled";

const Textbox = ({ placeholder, onChange, value, label, id }) => {
  return (
    <>
      {label && <StyledLabelText>{label}</StyledLabelText>}
      <StyledContainer>
        <input
          id={id}
          data-testid={id}
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
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default React.memo(Textbox);
