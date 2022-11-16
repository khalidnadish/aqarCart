import React from 'react'

import styled from "styled-components";


const Container=styled.div` 
display: flex;
/* flex-wrap: wrap; */
justify-content: space-evenly;
align-items:center;
position: sticky;
bottom: 0;
width: 100%;
/* gap: 1rem; */
height: 145px;
box-shadow: ${({ theme }) => theme.boxShadow}; 
background-color:${({ theme }) => theme.soft}; 
color: ${({ theme }) => theme.text};
z-index: 100;
`;


function AppFooter() {
  return (
    <Container>AppFooter</Container>
  )
}

export default AppFooter