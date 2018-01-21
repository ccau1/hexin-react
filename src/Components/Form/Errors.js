import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const ErrorMessage = styled.span`
  display: block;
  color: #f31c1c;
`;

class Errors extends React.Component {
  static contextTypes = {
    _reduxForm: PropTypes.object
  };

  render() {
    const { error } = this.context._reduxForm;

    return error
      ? error.map((err, errIndex) => (
          <ErrorMessage key={errIndex}>{err}</ErrorMessage>
        ))
      : null;
  }
}

Errors.ErrorMessage = ErrorMessage;

export default Errors;
