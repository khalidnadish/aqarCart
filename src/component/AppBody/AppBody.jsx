import React from 'react'
import MiniCard from "../card/MiniCard";
import styled from "styled-components";
import data from "./data.json"

const Container=styled.div` 
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items:center;
gap: 1rem;
padding: 1em;
 

@media only screen and (max-width: 420px) {
    flex-direction: column;
    
    flex-wrap: nowrap;
  }

`;

function AppBody() {
  return (
    <>
      <Container>
        {data.map((el) => {
          return (
          <React.Fragment key={el.id}>
           <MiniCard  data={el} />
          </React.Fragment>)
        })}
        
      </Container>
    </>
  );
}

export default AppBody