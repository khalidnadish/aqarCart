import React,{useState} from 'react'
import { MdLightMode } from 'react-icons/md';
import { MdModeNight } from 'react-icons/md';
import Style from "./AppHeeaderStyle"
import { AiOutlineMenuFold } from 'react-icons/ai';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import Sidemenu from './Sidemenu';



function AppHeader({darkMode,setDarkMode}) {
  const [open,setOpen]=useState(false)
  return (
    <Style.Container>
      <Style.Navigator onClick={() => {
          
          setOpen(true);
        }}>
      <AiOutlineMenuFold/>
      </Style.Navigator>



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



    {open   && <Sidemenu open={open} setOpen={setOpen}/> }

    </Style.Container >
  )
}

export default AppHeader