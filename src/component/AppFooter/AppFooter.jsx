import React from "react";

import styled from "styled-components";
import { AiFillPhone } from "react-icons/ai";
import { GrSnapchat } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-height: 60px;
  height: 60px;
  position: fixed;
  bottom: 0;
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  z-index: 1;
`;

const IconWarper = styled.div`
text-align: center;
background-color: ${({ theme }) => theme.bgLighter};
width: 100%;
cursor: pointer;
`;
function AppFooter() {
  return (
    <Container>
      <IconWarper>
        <AiFillPhone />
      </IconWarper>

      <IconWarper>
        <GrSnapchat />
      </IconWarper>

      <IconWarper>
        <IoLogoWhatsapp />
      </IconWarper>

      <IconWarper>
        <AiFillInstagram />
      </IconWarper>
    </Container>
  );
}

export default AppFooter;
