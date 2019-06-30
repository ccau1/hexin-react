import React from "react";
import { reduxForm } from "redux-form";
import Button from "../Button";
import Checkbox from "../Form/Checkbox";
import TextInput from "../Form/TextInput";
import Form from "../Form/Form";
import Errors from "../Form/Errors";
import { FormattedMessage } from "react-intl";

export const FORM_NAME = "todo";

const validate = values => {
  const errors = {};

  if (!values.task) {
    errors.task = <FormattedMessage id={"error.required"} />;
  }
  return errors;
};

const TodoForm = ({
  onSubmit,
  form,
  onSubmitSuccess,
  onSubmitFail = () => true,
  invalid,
  submitting,
  pristine
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onSubmitSuccess={onSubmitSuccess}
      onSubmitFail={onSubmitFail}
    >
      <Errors />
      <TextInput name="task" label="Task" />
      <Checkbox name="isComplete" label="Completed" />
      <Button.Primary
        type="submit"
        disabled={invalid || submitting || pristine}
      >
        Add
      </Button.Primary>
    </Form>
  );
};

export default reduxForm({
  form: FORM_NAME,
  validate,
  initialValues: { isComplete: false }
})(TodoForm);
