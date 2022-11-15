import React from "react";
import global from "../global/global";
import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";

import { GrOverview } from "react-icons/gr";

import { MdOutlinePriceCheck } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: aquamarine;
  border: 0 solid;
  gap: 10px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 100%);
  border-radius: 8px;
  /* 
  opacity: ${(props) => (props.open ? "1" : "0")};
  max-height: ${(props) => (props.open ? "100%" : "0")};
  background-color:${(props) => (props.open ? "aquamarine" : "green")};
  overflow: hidden;
  padding: ${(props) => (props.open ? "15px" : "0 15px")};
  transition: all 1s;

  transition: all 0.3s linear;
     
    transform-origin: 1px; */

  @media only screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const MenuItemWrper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;

`;

const MenuItem = styled.div`
font-size: 14px;

`;
const MenuIcon = styled.div``;

function CardMenu({ menu, setMenu }) {
  return (
    <Container
      
    >
      <MenuItemWrper open={menu}
      onClick={() => {
        setMenu(false);
      }}>
        <MenuIcon>
          <IoMdArrowRoundBack />
        </MenuIcon>
        <MenuItem>عودة</MenuItem>
      </MenuItemWrper>
      <global.Hr />
{/* ---------------------------------------- */}
      <MenuItemWrper>
        <MenuIcon>
          <GrOverview />
        </MenuIcon>
        <MenuItem>طلب معاينة</MenuItem>
      </MenuItemWrper>
{/* ----------------------------------------  */}
      <MenuItemWrper>
        <MenuIcon>
          <BiPhoneCall />
        </MenuIcon>
        <MenuItem>طلب اتصال</MenuItem>
      </MenuItemWrper>
{/* ---------------------------------------- */}      
      <MenuItemWrper>
        <MenuIcon>
          <MdOutlinePriceCheck />
        </MenuIcon>
        <MenuItem>طلب سعر نهائي</MenuItem>
      </MenuItemWrper>      




    </Container>
  );
}

export default CardMenu;
