import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppActions } from "../../Redux/App/actions";
import NavBar from "../../Components/NavBar";
import styled from "styled-components";
import FaBars from "react-icons/lib/fa/bars";
import Link from "../../Components/Link";

const Container = NavBar;

const HeaderLeftSide = styled.div``;

const HeaderRightSide = styled.div``;

class Header extends React.Component {
  render() {
    const { toggleSidebarOpen } = this.props;
    return (
      <Container>
        <HeaderLeftSide>
          <Link round onClick={toggleSidebarOpen.bind(this, undefined)}>
            <FaBars />
          </Link>
        </HeaderLeftSide>
        <HeaderRightSide />
      </Container>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebarOpen: AppActions.toggleSidebarOpen
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Header);
