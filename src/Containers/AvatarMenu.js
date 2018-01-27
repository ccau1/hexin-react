import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import Card from "../Components/Card";
import { auth } from "../Services/firebase";
import { withRouter } from "react-router";

const MenuItem = styled(Card)`
  min-width: 150px;
  padding: 10px;
  cursor: pointer;
`;
class AvatarMenu extends React.Component {
  logout = () => {
    const { history } = this.props;
    auth.signOut();
    history.go("/");
  };
  render() {
    const { logout } = this;
    return (
      <div>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.account.user });
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AvatarMenu)
);
