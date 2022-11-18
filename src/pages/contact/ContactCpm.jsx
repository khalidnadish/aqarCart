import styled from "styled-components";
 


const BodyWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-height:  100%;
  height:  calc(100vh - 120px);
  color: ${({ theme }) => theme.text};
  overflow:auto ;
`;

const ContentWarper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #777;
  height: 100%;
  width: 100%;
`;

const HeroImageWarper = styled.div`
  height: 50%;
  width: 100%;
  margin: 1rem;
`;


const Txt = styled.p`
  outline: none;
  padding: 0.2rem 1rem;
font-size:1rem;
  min-width: 5rem;
  font-family: "CairoBold";
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 500px) {
    font-size:.8rem;
  }
`;

const Btn = styled.button`
  outline: none;
  padding: 0.2rem 1rem;
  min-width: 5rem;
  font-family: "CairoBold";
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  
  cursor: pointer;
`;

const HeroTextWarper = styled.div`
  height: 50%;
  width: 100%;

  
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: fill;
`;

const FlexDiv = styled.div`
display: flex;
width: 100%;

flex-direction: ${({direction})=>direction==="row" ? "row":"column"};
/* justify-content: flex-start; */
align-items: flex-start;
gap:1rem;
`;

const imageWarper = styled.div`
  min-width: 300px;
  min-height: 50%;
  overflow: hidden;
  
  background-color: ${({ theme }) => theme.bg};
`;



const HeroTitleHeader = styled.h1`
background-color:${({ theme }) => theme.bg};
text-align: center;
`;

const HeroSubTitleWraper= styled.div`
width:100% ;
overflow: auto;
/* margin : 1rem; */
height: 80%;
padding: 1rem;

`;
const HeroSubTitle = styled.p`
background-color:${({ theme }) => theme.bg};
text-align: right;
padding: 1rem;
word-wrap: break-word;
width:100% ;
overflow: auto;
border-radius: 8px;
border:1px solid ${({ theme }) => theme.bg};


`;

export default {
  BodyWarper,
  Image,
  imageWarper,
  HeroTitleHeader,
  ContentWarper,
  HeroImageWarper,
HeroTextWarper,
HeroSubTitle,
 HeroSubTitleWraper,
 Txt,
 Btn,
 FlexDiv
};
