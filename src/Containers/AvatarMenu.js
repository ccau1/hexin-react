import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { auth } from "../Services/firebase";
import { withRouter } from "react-router";
import Button from "../Components/Button";
import H5 from "../Components/H5";
import Small from "../Components/Small";
import Avatar from "./Avatar";

const AvatarMenuContainer = styled.div`
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-color: rgba(0, 0, 0, 0.2);
  width: 300px;
`;

const BottomPanel = styled.div`
  background: #f5f5f5;
  border-top: 1px solid #ccc;
  border-color: rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

const ContentPanel = styled.div`
  padding: 18px 10px;
  display: flex;
  flex-direction: row;
`;

const ContentLeftSide = styled.div`
  margin-right: 10px;
`;

const ContentRightSide = styled.div``;

class AvatarMenu extends React.Component {
  logout = () => {
    const { history } = this.props;
    auth.signOut();
    history.go("/");
  };

  goToProfile = () => {
    const { history } = this.props;
    history.push("/account");
  };
  render() {
    const { logout, goToProfile } = this;
    const { user } = this.props;
    return (
      <AvatarMenuContainer>
        <ContentPanel>
          <ContentLeftSide>
            <Avatar size={100} />
          </ContentLeftSide>
          <ContentRightSide>
            <H5 noTopMargin>{user.displayName}</H5>
            <Small>{user.email}</Small>
            <br />
            <Button.Primary onClick={goToProfile}>My Account</Button.Primary>
          </ContentRightSide>
        </ContentPanel>
        <BottomPanel>
          <div />
          <Button onClick={logout}>Logout</Button>
        </BottomPanel>
      </AvatarMenuContainer>
    );
  }
}

const mapStateToProps = state => ({ user: state.account.user });
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AvatarMenu)
);
