import styled from "styled-components";

 

const headerWarper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:8px;
  width: 100%;
  height: 45px;
  box-shadow: rgb(220, 220, 220) 0px 2px 10px;
  padding-bottom: 8px;
  padding-top: 8px;
`;




const iconWarper = styled.div`
display: flex;
justify-content: center;
align-items: center;

  width: 40px;
  height: 45px;
  background-color: rgb(220, 220, 220);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  font-size:20px ;
  cursor: pointer;
`;

const headerTypeWarper = styled.div`
display: flex;
justify-content: center;
align-items: center;

  width: 30%;
  height: 38px;
  background-color: rgb(220, 220, 220);;
  border-radius: 8px;
  font-weight: bolder;
  border: 0.5px solid #ccc;
  margin:3px 3px; 

  
  
`;

const headerTitleWarper = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: "Cairo";
  width: 70%;
  height: 38px;
  
  background-color: rgb(220, 220, 220);;
  border-radius: 8px;
  font-weight: bolder;
  border: 0.5px solid  #ccc;
  margin:3px 3px; 
  
`;




export default {
  
  headerWarper,
  iconWarper,
  headerTypeWarper,
headerTitleWarper
};
