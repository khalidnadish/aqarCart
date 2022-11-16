import React from 'react'
import styled from "styled-components";
import { MdLightMode } from 'react-icons/md';
import { MdModeNight } from 'react-icons/md';
import Style from "./AppHeeaderStyle"

function AppHeader({darkMode,setDarkMode}) {
  return (
    <Style.Container>
      <Style.Logo>logo</Style.Logo>
      <Style.Menu>
      <Style.MenuItem>الرئسية</Style.MenuItem>
      <Style.MenuItem>العروض</Style.MenuItem>
      <Style.MenuItem>تواصل</Style.MenuItem>
      </Style.Menu>
        <Style.Item onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdModeNight/> : <MdLightMode/>}
          {darkMode ? <Style.MenuItem>النهاري</Style.MenuItem>  : <Style.MenuItem>اليلي</Style.MenuItem>} 
        </Style.Item>
    </Style.Container>
  )
}

export default AppHeader