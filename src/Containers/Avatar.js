import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Avatarr from "react-avatar";

class Avatar extends React.Component {
  static propTypes = {
    size: PropTypes.number,
    round: PropTypes.bool,
    style: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
      PropTypes.array
    ])
  };
  static defaultProps = {
    size: 30,
    round: true,
    style: {},
    user: {}
  };
  render() {
    const { user, size, round, style } = this.props;
    return (
      <Avatarr
        style={style}
        name={user.displayName}
        round={round}
        size={size}
        src={user.photoURL}
      />
    );
  }
}

const mapStateToProps = state => ({ user: state.account.user || {} });
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
