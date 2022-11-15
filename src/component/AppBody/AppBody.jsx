import React from 'react'
import MiniCard from "../card/MiniCard";
import styled from "styled-components";

const Container=styled.div` 
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items:center;
gap: 1rem;

`;

function AppBody() {
  return (
   <>
   <Container>
     <MiniCard title="TST"  detail="DFDFD"  sts="مجاني" color="crimson" />
       <MiniCard title="TST"  detail="DFDFD"  sts="مجاني" color="crimson" />
       <MiniCard title="TST"  detail="DFDFD"  sts="مجاني" color="crimson" />
       <MiniCard title="TST"  detail="DFDFD"  sts="مجاني" color="crimson" />
       <MiniCard title="TST"  detail="DFDFD"  sts="مجاني" color="crimson" />
       <MiniCard title="TST"  detail="DFDFD"  sts="مجاني" color="crimson" />
       </Container>
   
   
   </>
  )
}

export default AppBody