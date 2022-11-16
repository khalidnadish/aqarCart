import styled from "styled-components";
 
 
const actionWarper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 45px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,.5);
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.soft};
  border-top: 1px solid ${({ theme }) => theme.textSoft};


  border-radius: 0px 0px 8px 8px;
  /* box-shadow:${({ theme }) => theme.boxShadow}; */
`;

const footeIconWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 8px;
  background-color: ${({ theme }) => theme.soft};;
  color: ${({ theme }) => theme.text};
 
  font-size: 15px;
`;

const footeIconTextWarper = styled.div`
font-size: 10px;
font-weight: lighter;
font-style: italic;
color: inherit;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const footeIconWithTextWarper = styled.div`

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;

const ServicePrice = styled.h4`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: fit-content;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  border-radius: 0px 8px 8px 0px;
  padding: 12px 8px 12px 8px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const TextDetail = styled.p`
  margin-top: 10px;
  text-align: right;
  font-family: "Cairo", sans-serif;
  font-weight: 300;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.text};
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const SubTextDetail = styled.li`
  margin-top: 5px;
  text-align: right;
  font-family: "Cairo", sans-serif;
  font-weight: 300;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.text};
  width: 100%;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export default {
  
  
 
  
 
 
 
  actionWarper,
  footeIconWarper,
  footeIconTextWarper,
  footeIconWithTextWarper,
};
