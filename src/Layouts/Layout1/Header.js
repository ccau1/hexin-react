import React from "react";
import styled from "styled-components";
import FaBars from "react-icons/lib/fa/bars";
import Avatar from "../../Containers/Avatar";
import NavBar from "../../Components/NavBar";
import Popover from "react-popover";
import Button from "../../Components/Button";
import AvatarMenu from "../../Containers/AvatarMenu";

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

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvatarMenuOpen: false
    };
  }
  toggleAvatarMenuOpen = () => {
    const { isAvatarMenuOpen } = this.state;
    this.setState({ isAvatarMenuOpen: !isAvatarMenuOpen });
  };
  render() {
    const { toggleAvatarMenuOpen } = this;
    const { isAvatarMenuOpen } = this.state;
    return (
      <Container>
        <HeaderLeftSide>
          <FaBars />
        </HeaderLeftSide>
        <HeaderRightSide>
          <Popover
            isOpen={isAvatarMenuOpen}
            preferPlace={"below"}
            body={<AvatarMenu />}
          >
            <Button onClick={toggleAvatarMenuOpen} round>
              <Avatar />
            </Button>
          </Popover>
        </HeaderRightSide>
      </Container>
    );
  }
}
