import React, { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import Style from "./AppHeeaderStyle";
// import { AiOutlineMenuFold } from "react-icons/ai";
// import { AiOutlineMenuUnfold } from "react-icons/ai";
// import Sidemenu from "./Sidemenu";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";


function AppHeader({ open, setOpen, darkMode, setDarkMode }) {
  return (
    <Style.Container>
      {/* <Style.Navigator
        onClick={() => {
          setOpen(true);
        }}
      >
        <AiOutlineMenuFold />
      </Style.Navigator> */}

      {/* <Style.MenuContainer> */}
      <Style.Logo>logo</Style.Logo>
      <Style.Menu>
        {/*  --------------------------------------------*/}
        <Style.MenuLink to="/about">
          <AiOutlineHome />
          <Style.MenuTitle>الرئسية</Style.MenuTitle>
        </Style.MenuLink>
        {/*  --------------------------------------------*/}
        <Style.MenuLink to="/">
          <MdOutlineLocalOffer />
          <Style.MenuTitle>العروض</Style.MenuTitle>
        </Style.MenuLink>
        {/*  --------------------------------------------*/}
        <Style.MenuLink to="/contact">
          <MdOutlineContactPhone />
          <Style.MenuTitle>تواصل</Style.MenuTitle>
        </Style.MenuLink>
        {/*  --------------------------------------------*/}
        <Style.MenuItem onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdModeNight /> : <MdLightMode />}
          <Style.MenuTitle>{darkMode ?<>لنهاري</>  :<>اليلي</> }</Style.MenuTitle>
         </Style.MenuItem>
      </Style.Menu>
      {/* 
      <Style.Item onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <MdModeNight /> : <MdLightMode />}
        {darkMode ? (
          <Style.MenuItem>النهاري</Style.MenuItem>
        ) : (
          <Style.MenuItem>اليلي</Style.MenuItem>
        )}
      </Style.Item>  */}
    </Style.Container>
  );
}

export default AppHeader;
