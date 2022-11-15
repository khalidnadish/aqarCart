import React from "react";
import global from "../../global/global";
import styled from "styled-components";
import cpm from "./cpm"

import { IoMdArrowRoundBack } from "react-icons/io";

import { RiLandscapeLine } from "react-icons/ri";

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
  background-color: ${({ theme }) => theme.soft};
  color:  ${({ theme }) => theme.text};
  border: 0 solid;
  gap: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 8px;
  

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


const MenuHeaderItemWrper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 10px;
  background-color: ${({ theme }) => theme.soft};
  color:  ${({ theme }) => theme.text};
  cursor: pointer;

`;

const MenuItem = styled.div`
font-size: 14px;
background-color: ${({ theme }) => theme.soft};
  color:  ${({ theme }) => theme.text};

`;
const MenuIcon = styled.div`
 background-color: ${({ theme }) => theme.soft};
  color:  ${({ theme }) => theme.text};

`;

function CardMenu({ menu, setMenu }) {
  return (
    <Container
      
    >
      <MenuHeaderItemWrper open={menu}
      onClick={() => {
        setMenu(false);
      }}>
        <MenuIcon>
          <IoMdArrowRoundBack />
        </MenuIcon>
        <MenuItem>عودة</MenuItem>
      </MenuHeaderItemWrper>
      <global.Hr />
{/* ---------------------------------------- */}
      <MenuItemWrper>
        <MenuIcon>
          <RiLandscapeLine  />
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
