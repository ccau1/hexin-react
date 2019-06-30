import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withContext from "../../Lib/withContext";

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSubmitSuccess: PropTypes.func
  };

  static defaultProps = {
    onSubmitSuccess: () => true,
    onSubmitFail: () => true
  };

  static contextTypes = {
    _reduxForm: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.formSubmitting !== this.props.formSubmitting &&
      !nextProps.formSubmitting
    ) {
      // form is now done submitting, call success or fail listener
      if (nextProps.formSucceed) {
        // if form succeeded, trigger onSubmitSuccess event
        if (nextProps._reduxForm.onSubmitSuccess) {
          nextProps._reduxForm.onSubmitSuccess();
        }
      } else if (nextProps.formFailed) {
        // if form failed, trigger onSubmitFail event
        if (nextProps._reduxForm.onSubmitFail) {
          nextProps._reduxForm.onSubmitFail(nextProps.formError);
        }
      }
    }
  }

  render() {
    const _onSubmit = ev => {
      ev.preventDefault();
      const { onSubmit, _reduxForm: { getValues } } = this.props;
      onSubmit(getValues());
    };
    return <form onSubmit={_onSubmit} children={this.props.children} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  formSucceed:
    state.form[ownProps._reduxForm.form] &&
    state.form[ownProps._reduxForm.form].submitSucceeded,
  formFailed:
    state.form[ownProps._reduxForm.form] &&
    state.form[ownProps._reduxForm.form].submitFailed,
  formSubmitting:
    state.form[ownProps._reduxForm.form] &&
    state.form[ownProps._reduxForm.form].submitting,
  formError:
    state.form[ownProps._reduxForm.form] &&
    state.form[ownProps._reduxForm.form].error
});

export default withContext({ _reduxForm: PropTypes.object })(
  connect(mapStateToProps)(Form)
);
