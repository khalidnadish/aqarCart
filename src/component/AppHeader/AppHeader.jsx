import React from 'react'
import styled from "styled-components";

const Container=styled.div` 
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
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
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

function AppHeader({darkMode,setDarkMode}) {
  return (
    <Container>AppHeader
        <Item onClick={() => setDarkMode(!darkMode)}>
          {/* <SettingsBrightnessOutlinedIcon /> */}
          {darkMode ? "النهاري" : "اليلي"} الوضع
        </Item>
    </Container>
  )
}

export default AppHeader