import React from "react";
import global from "../../global/global";
import styled from "styled-components";
import cpm from "./cpm"

import { IoMdArrowRoundBack } from "react-icons/io";

import { RiLandscapeLine } from "react-icons/ri";

import { MdOutlinePriceCheck } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

function CardMenu({ menu, setMenu }) {
  return (
    <cpm.Container
      
    >
      <cpm.MenuHeaderItemWrper open={menu}
      onClick={() => {
        setMenu(false);
      }}>
        <cpm.MenuIcon>
          <IoMdArrowRoundBack />
        </cpm.MenuIcon>
        <cpm.MenuItem>عودة</cpm.MenuItem>
      </cpm.MenuHeaderItemWrper>
      <global.Hr />
{/* ---------------------------------------- */}
      <cpm.MenuItemWrper>
        <cpm.MenuIcon>
          <RiLandscapeLine  />
        </cpm.MenuIcon>
        <cpm.MenuItem>طلب معاينة</cpm.MenuItem>
      </cpm.MenuItemWrper>
{/* ----------------------------------------  */}
      <cpm.MenuItemWrper>
        <cpm.MenuIcon>
          <BiPhoneCall />
        </cpm.MenuIcon>
        <cpm.MenuItem>طلب اتصال</cpm.MenuItem>
      </cpm.MenuItemWrper>
{/* ---------------------------------------- */}      
      <cpm.MenuItemWrper>
        <cpm.MenuIcon>
          <MdOutlinePriceCheck />
        </cpm.MenuIcon>
        <cpm.MenuItem>طلب سعر نهائي</cpm.MenuItem>
      </cpm.MenuItemWrper>      




    </cpm.Container>
  );
}

export default CardMenu;
