import React from "react";
import cpm from "./AppfooterCpm"

import { AiFillPhone } from "react-icons/ai";
import { GrSnapchat } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";


function AppFooter() {
  return (
    <cpm.Container>
      <cpm.MenuLink to="/contact"> 
      <cpm.IconWarper>
        <AiFillPhone />
      </cpm.IconWarper>
      </cpm.MenuLink>

      <cpm.IconWarper>
        <GrSnapchat />
      </cpm.IconWarper>

      <cpm.IconWarper>
        <IoLogoWhatsapp />
      </cpm.IconWarper>

      <cpm.IconWarper>
        <AiFillInstagram />
      </cpm.IconWarper>
    </cpm.Container>
  );
}

export default AppFooter;
