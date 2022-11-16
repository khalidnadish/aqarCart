import styled from "styled-components";

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
  @media only screen and (max-width: 420px) {
   width:100%;
   align-items: center;
  

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
@media only screen and (max-width: 480px) {
   display: none;
  }
`;
const Navigator= styled.div``;

const SideMenu= styled.div`
position: fixed;
top: 35px;
/* right: 0; */
width: 20%;
height:70% ;
color: ${({ theme }) => theme.text};
background-color: ${({ theme }) => theme.soft};

/* background-color:lightgreen; */
`;


const BackIconMenuWraper= styled.div`
 display: flex;
 gap: 10px;
 align-items:center ;
 margin-top: 10px;
 margin-right: 10px;
 width: 100%;
 cursor: pointer;
 padding-bottom: 1rem;
 border-bottom: 0.5px solid  ${({ theme }) => theme.bg} ;
/* background-color:lightgreen; */
`;

const MenuItem = styled.li`
  text-decoration: none;
  list-style: none;
  &:hover {
    background-color: ${({ theme }) => theme.price};
  }
  
`;



export default {
  Container,
  Item,
  Logo,
  Menu,
  MenuItem,
  Navigator,
  SideMenu,
  BackIconMenuWraper
};
