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
    if (Array.isArray(error)) {
      return error.map((err, errIndex) => (
        <ErrorMessage key={errIndex}>{err}</ErrorMessage>
      ));
    } else if (typeof error === "object") {
      return Object.keys(error).map(key => (
        <ErrorMessage key={key}>{`${key}: ${error[key]}`}</ErrorMessage>
      ));
    } else if (typeof error === "string") {
      return <ErrorMessage>{error}</ErrorMessage>;
    } else {
      return null;
    }
  }
}

Errors.ErrorMessage = ErrorMessage;

export default Errors;
