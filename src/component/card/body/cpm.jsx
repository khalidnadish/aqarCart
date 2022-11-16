import styled from "styled-components";
 


const BodyWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   position: absolute;
   top: 50px;
  /* gap:8px; */
  width: 100%;
  height:300px;
  
  color: ${({ theme }) => theme.text};
  background-color:  ${({ theme }) => theme.soft};
   
  
`;



const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  
  object-fit: cover;
`;

const imageWarper = styled.div`
  width: 100%;
  height: 75%;
  background-color: ${({ theme }) => theme.bg};
`;



const subTitleWarper = styled.div`
  width: 100%;
  height: 25%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  padding: 0.5em;
  overflow-y: auto;
`;

export default {
  BodyWarper,
  Image,
  imageWarper,
  subTitleWarper,
};
