/* @flow */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {
  TextField,
} from 'redux-form-material-ui';

export default class MultilingualStringField extends Component {
  static propTypes = {
    languages: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })).isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
  };

  render() {
    const {languages, name, label} = this.props;
    // TODO:: use one field input, with flag toggle with indication of field filled or not (colored border?) to switch between language
    return (
      <div>
        {languages.map(lang => {
          return (
            <Field key={lang.key} name={`${name}.${lang.key}`} component={TextField} floatingLabelText={(label ? label + ' - ' : '') + lang.name} />
          );
        })}
      </div>
    );
  }
}
