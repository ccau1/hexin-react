import React from "react";
import styled from "styled-components";
import FaBars from "react-icons/lib/fa/bars";

import NavBar from "../../Components/NavBar";

const Container = NavBar;

const HeaderLeftSide = styled.div``;

const HeaderRightSide = styled.div``;

export default () => (
  <Container>
    <HeaderLeftSide>
      <FaBars />
    </HeaderLeftSide>
    <HeaderRightSide />
  </Container>
);
