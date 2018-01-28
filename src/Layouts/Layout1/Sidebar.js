import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Nav from "./Nav";
import styled from "styled-components";

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

const SideBarHeader = NavBar.extend`
  background-color: rgba(0, 0, 0, 0.3);
  color: ${props => props.theme.color.primaryText};
  font-size: ${props => 17 * props.theme.unit + "px"};
  padding: 8px;
`;

class Sidebar extends React.Component {
  render() {
    const { isOpen } = this.props;
    return (
      <SideBarContainer isOpen={isOpen}>
        <SideBarHeader>
          <Image src="/images/logo.png" style={{ height: "100%" }} />
        </SideBarHeader>
        <Nav isOpen={isOpen} />
      </SideBarContainer>
    );
  }
}

const mapStateToProps = state => ({ isOpen: state.app.isSidebarOpen });
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
