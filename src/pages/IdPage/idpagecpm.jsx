import styled,{css} from "styled-components";
 


const BodyWarper = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(95% );
  margin: auto;
  margin-top: 1rem;
  max-height:  100%;
  gap: 0.5rem;
  height:  calc(100vh - 120px);
  color: ${({ theme }) => theme.text};
  overflow:auto ;
`;

const ContentWarper = styled.div`
  display: flex;
  flex-direction: column;
   width: calc(100% - 60px);
  justify-content: center;
  align-items: center;
  color: #000;
  height: 100%;
  padding: 1rem;
 gap: 1rem;
  background-color: #777;
  border-radius:4px;
  box-shadow:  0 0px 5px rgba(0,0,0,0.2) ;
  overflow: auto;
 
  
`;




const ShowContentWarper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 100px;

   width: calc(100% - 160px);

   height:  calc(100vh - 150px);
  justify-content: center;
  align-items: center;
  color: #000;

  background-color: #777;
  border-radius:4px;
  box-shadow:  0 5px 20px rgba(0,0,0,0.5) ;
 
  
`;





const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  margin-left:1rem;
  height:  calc(100vh - 150px);
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #777;
  border-radius:4px;
  box-shadow:  0 5px 20px rgba(0,0,0,0.5) ;
 
  
`;

const InnerSideMenu = styled.div`

display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height:99% ;
  width: 80%;
 
  align-items: center;
  color: #000;
  background-color: #777;
  border-radius:4px;
  box-shadow:  0 5px 20px rgba(0,0,0,0.5) ;




`;






const SideIconWarper = styled.div`
  /* height: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size:1.8rem;
  border-top: .5px solid #44434333;
  border-bottom: .5px solid #41404019;;
 
  cursor: pointer;
  z-index: 5;
  
  
`;

const HeroTextWarper = styled.div`
padding: .2rem;
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

const TXTtitleWraper= styled.div`
display: flex;
flex-direction: ${({dirx})=>dirx};
/* gap: 5px; */
width:100% ;
/* padding: .4rem; */
border:1px solid ${({ theme }) => theme.soft};
overflow: auto;



`;




const txtSharedstyle=css`

color:${({ theme }) => theme.text}; ;
text-align: right;
word-wrap: break-word;
border-radius: 1px;
border:1px solid ${({ theme }) => theme.soft};
padding:5px;
width:100% ;
text-align: center;
/* height: 5rem; */
@media (max-width: 500px) {
  font-size: .7rem;
  text-align: right;
  padding: 0;
   
  }


`;





const TXTtitle = styled.p`
background-color:${({ theme }) => theme.soft};
text-align:center;
font-size: 1rem;
font-family: "CairoBold";
${txtSharedstyle}

 

`;

const TXTdata = styled.p`
background-color:${({ theme }) => theme.bg};
font-size: 1rem;
font-family: "TajawalRegular";
${txtSharedstyle}
text-align:${({ align }) => align}; ;



`;


const FieldSet = styled.fieldset`
display: flex;
align-items: center;
width: 100%;
gap:10px;
border: 1px solid #ddd;
border-radius: 5px;
padding: 5px 5px 5px 5px;
margin :5px 0;
font-family: 'TajawalBold';
@media (max-width: 500px) {
 flex-direction: column;
 text-align: right;
   
  }


`;
export default {
  BodyWarper,
  Image,
  imageWarper,
  HeroTitleHeader,
  ContentWarper,
  SideIconWarper,
HeroTextWarper,
TXTtitle,
 TXTtitleWraper,
 SideMenu,
 InnerSideMenu,
 ShowContentWarper,
 TXTdata,
 FieldSet


};
