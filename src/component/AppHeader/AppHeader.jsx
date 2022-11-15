import React from 'react'
import styled from "styled-components";
import { MdLightMode } from 'react-icons/md';
import { MdModeNight } from 'react-icons/md';

const Container=styled.div` 
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items:center;
position: sticky;
top: 0;
width: 100%;
gap: 1rem;
height: 45px;
box-shadow: ${({ theme }) => theme.HboxShadow}; 
background-color:${({ theme }) => theme.nafbar}; 
color: ${({ theme }) => theme.text};
z-index: 100;
padding-right:1rem ;
padding-left:1rem ;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex: 1;
  cursor: pointer;
  padding: 5px 0px;
  border-right: 1px solid ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  padding: 5px 0px;
  border-left: 1px solid ${({ theme }) => theme.text};
 flex:1;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Menu= styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
flex:7;

`;


const MenuItem = styled.li`
  text-decoration: none;
  list-style: none;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
  @media only screen and (max-width: 480px) {
   display: none;
  }
`;

function AppHeader({darkMode,setDarkMode}) {
  return (
    <Container>
      <Logo>logo</Logo>
      <Menu>
      <MenuItem>الرئسية</MenuItem>
      <MenuItem>العروض</MenuItem>
      <MenuItem>تواصل</MenuItem>
      </Menu>
        <Item onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdModeNight/> : <MdLightMode/>}
          {darkMode ? <MenuItem>النهاري</MenuItem>  : <MenuItem>اليلي</MenuItem>} 
        </Item>
    </Container>
  )
}

export default AppHeader