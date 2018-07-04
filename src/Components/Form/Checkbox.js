import React from 'react';
import { Field } from 'redux-form';
import FieldContainer from './FieldContainer';

function Checkbox({ input, label, disabled }) {
  return (
    <FieldContainer>
      <label>
        <input
          type="checkbox"
          disabled={disabled}
          checked={input.value}
          {...input}
        />
        {label}
        <span />
      </label>
    </FieldContainer>
  );
}

export default props => {
  return <Field {...props} component={Checkbox} />;
};
