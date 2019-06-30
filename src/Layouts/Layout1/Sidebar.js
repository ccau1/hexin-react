import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Nav from "./Nav";
import styled from "styled-components";
import { AppActions } from "../../Redux/App/actions";

import NavBar from "../../Components/NavBar";
import Image from "../../Components/Image";

const SideBarContainer = styled.div`
  width: ${props => 250 * props.theme.unit + "px"};
  background-color: ${props => props.theme.color.primary};
  ${props => {
    if (props.isOpen) {
      return `
        display: block;
        @media (max-width: 700px) {
          z-index: 10000;
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          &:before {
            content: '';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            position: fixed;
            z-index: -1;
          }
        }
      `;
    } else {
      return `
        width: auto;
        @media (max-width: 700px) {
          display: none;
        }
      `;
    }
  }};
`;

const SideBarOverlay = styled.a`
  ${props => {
    if (props.isOpen) {
      return `
      @media (max-width: 700px) {
        &:before {
          content: '';
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          position: fixed;
          z-index: -1;
        }
      }`;
    }
  }};
`;

const SideBarHeader = NavBar.extend`
  background-color: rgba(0, 0, 0, 0.3);
  color: ${props => props.theme.color.primaryText};
  font-size: ${props => 17 * props.theme.unit + "px"};
  padding: 8px ${props => props.theme.measurements.padding + "px"};
`;

const Logo = Image.extend`
  background-position: left center;
  height: 100%;
  flex: 1;
`;

class Sidebar extends React.Component {
  render() {
    const { isOpen, toggleSidebarOpen } = this.props;
    return (
      <SideBarContainer isOpen={isOpen}>
        <SideBarHeader>
          <Logo src="/images/logo.png" style={{ height: "100%" }} />
        </SideBarHeader>
        <Nav isOpen={isOpen} />
        <SideBarOverlay
          isOpen={isOpen}
          onClick={toggleSidebarOpen.bind(this, false)}
        />
      </SideBarContainer>
    );
  }
}

const mapStateToProps = state => ({ isOpen: state.app.isSidebarOpen });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebarOpen: AppActions.toggleSidebarOpen
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
