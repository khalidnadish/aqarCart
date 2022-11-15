import styled from "styled-components";

 

const headerWarper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  gap:8px;
  width: 100%;
  height: 45px;
  color: ${({ theme }) => theme.text};
  background-color:  ${({ theme }) => theme.soft};
  box-shadow:${({ theme }) => theme.boxShadow};
  padding-bottom: 8px;
  padding-top: 8px;
  
  
`;




const iconWarper = styled.div`
display: flex;
justify-content: center;
align-items: center;

  width: 40px;
  height: 100%;
  background-color: ${({ theme }) => theme.bg};
 
  font-size:20px ;
  margin-left: 5px;
  cursor: pointer;
`;

const headerTypeWarper = styled.div`
display: flex;
justify-content: center;
align-items: center;

  width: 30%;
  height: 38px;
  background-color:${({ theme }) => theme.soft};
  border-radius: 8px;
  font-weight: bolder;
  border: 0.5px solid #ccc;
  margin:3px 3px; 
  margin-right: 5px;

  
  
`;

const headerTitleWarper = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: "Cairo";

  width: 70%;
  height: 38px;
  
  background-color: ${({ theme }) => theme.soft};
  border-radius: 8px;
  font-weight: bolder;
  /* border: 0.5px solid  ${({ theme }) => theme.bgLighter}; */
  margin:3px 3px; 
  
`;




export default {
  
  headerWarper,
  iconWarper,
  headerTypeWarper,
headerTitleWarper
};
