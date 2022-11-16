import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
   
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  border: 0 solid;
  gap: 10px;
  /* box-shadow:0 0 0rem .5em blue; */
  border-radius: 8px;
  box-shadow: inset 0 0 20px -10px ;

  @media only screen and (max-width: 480px) {
    width: 50%;
     
  }
`;

const MenuItemWrper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: .5px solid ${({ theme }) => theme.hrColor} ;
  cursor: pointer;
  &:hover{
    border-bottom: 2px solid ${({ theme }) => theme.price} ;
    /* background-color:${({ theme }) => theme.text}; */
 
  }
`;

const MenuHeaderItemWrper = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 10px;
  /* background-color: ${({ theme }) => theme.nafbar}; */
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-size: 14px;
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  &:hover{
    color: ${({ theme }) => theme.price};
  }
`;
const MenuIcon = styled.div`
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  
`;

export default {
  Container,
  MenuItemWrper,
  MenuHeaderItemWrper,
  MenuItem,
  MenuIcon,
};
