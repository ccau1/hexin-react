import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppActions } from "../../Redux/App/actions";
import styled from "styled-components";
import FaBars from "react-icons/lib/fa/bars";
import Avatar from "../../Containers/Avatar";
import NavBar from "../../Components/NavBar";
import Popover from "react-popover";
import Button from "../../Components/Button";
import AvatarMenu from "../../Containers/AvatarMenu";
import Link from "../../Components/Link";

const Container = NavBar;

const HeaderLeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const HeaderRightSide = styled.div`
  display: flex;
  flex-direction: row;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvatarMenuOpen: false
    };
  }

  render() {
    const {
      isAvatarMenuOpen,
      toggleAvatarMenuOpen,
      toggleSidebarOpen
    } = this.props;
    return (
      <Container>
        <HeaderLeftSide>
          <Link onClick={toggleSidebarOpen.bind(this, undefined)}>
            <FaBars />
          </Link>
        </HeaderLeftSide>
        <HeaderRightSide>
          <Popover
            isOpen={isAvatarMenuOpen}
            onOuterAction={toggleAvatarMenuOpen.bind(this, false)}
            preferPlace={"below"}
            body={<AvatarMenu />}
          >
            <Button onClick={toggleAvatarMenuOpen.bind(this, undefined)} round>
              <Avatar />
            </Button>
          </Popover>
        </HeaderRightSide>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAvatarMenuOpen: state.app.isAvatarMenuOpen
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebarOpen: AppActions.toggleSidebarOpen,
      toggleAvatarMenuOpen: AppActions.toggleAvatarMenuOpen
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Header);
