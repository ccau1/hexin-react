import React from "react";
import { Field } from "redux-form";
import TextInput from "../TextInput";
import { ErrorMessage } from "./Errors";
import FieldContainer from "./FieldContainer";
import FieldLabel from "./FieldLabel";

const Text = props => {
  const { input, label, type, meta: { touched, error, warning } } = props;

  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>
      <div>
        <TextInput {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <ErrorMessage>{error}</ErrorMessage>) ||
            (warning && <ErrorMessage>{warning}</ErrorMessage>))}
      </div>
    </FieldContainer>
  );
};

export default props => {
  return <Field {...props} component={Text} />;
};
