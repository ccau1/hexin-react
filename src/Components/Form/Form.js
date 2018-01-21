import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withContext from "../../Lib/withContext";

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSubmitSuccess: PropTypes.func
  };

  static contextTypes = {
    _reduxForm: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.formSucceed !== this.props.formSucceed &&
      nextProps.formSucceed
    ) {
      nextProps._reduxForm.onSubmitSuccess();
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
    state.form[ownProps._reduxForm.form].submitSucceeded
});

export default withContext({ _reduxForm: PropTypes.object })(
  connect(mapStateToProps)(Form)
);
