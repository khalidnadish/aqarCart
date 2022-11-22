import styled from "styled-components";

/* ------------------------------------- */
const BodyWarper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  height: calc(100vh - 120px);
  margin: auto;
  color: ${({ theme }) => theme.text};
  min-height: 0px;
  /* gap: 1rem; */
  /* overflow: auto; */
  @media (max-width: 500px) {
    flex-direction: column;
    font-size: 0.8rem;
  }
`;
/* ------------------------------------- */
const MenuArae = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: ${({ theme }) => theme.price};
  position: absolute;
  top: 10px;
  left: 0;
  height: 30px;
  border-radius: 4px;
`;
/* --------------------------------- */
const MenuTxt = styled.p`
  display: flex;
  align-items: center;
  font-family: "CairoBold";
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  background-color: #4d0101;
  border-radius: 4px;
  padding: 0 0.5rem;
  cursor: pointer;
  /* width: 100%; */
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
/* ------------------------------------- */
const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1rem;
`;
/* ------------------------------------- */
const HeroImageWarper = styled.div`
  max-width: 80%;
  max-height: 80%;
  margin: auto;
`;
/* ------------------------------------- */
const Image = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
`;
/* ------------------------------------- */
const Txt = styled.p`
  display: flex;
  align-items: center;
  font-family: "CairoBold";
  font-size: 0.9rem;
  width: ${({ width }) => width};


 
  /* color: ${({ theme }) => theme.text}; */
  /* min-width: 0px; */
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
/* ------------------------------------- */
const Btn = styled.button`
display: flex;
align-items: center;
 justify-content: center;
  outline: none;
  padding: 0.2rem 1rem;
  /* min-width: 5rem; */
  font-family: "TajawalBold";

  border-radius: 8px;
  border: 1px solid;
  width: 100%;
  font-size:1rem;
  justify-items: center;
  background-color: ${({ theme }) => theme.updateBtn};
  color: ${({ theme }) => theme.text};
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  color: black;
  cursor: pointer;
`;

/* ------------------------------------- */
const ShowContentWarper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  flex-wrap: wrap;
  top: 60px;
  left: 0px;
  width: 100%;
  max-height: calc(100vh - 200px);
  height: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.soft};
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);

  @media (max-width: 500px) {
    
  }
`;
/* -------------FieldSet------------------------ */
const FieldSet = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: "TajawalBold";
  legend {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    text-align: right;
    margin: 0;
    padding: 0px 0px 0px 0px;
    gap: 1px;
    max-height: auto;
  }
`;
/* ------------------------------------- */
const Txtlabel = styled.label`
  display: flex;
  align-items: center;
  font-family: "CairoBold";
  font-size: 0.9rem;
  min-width: 0px;
  color: ${({ theme }) => theme.text};
  @media (max-width: 500px) {
    font-size: 0.8rem;
    min-width: 0px;
  }
`;
/* -----------FlexDiv-------------- */
const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 7px;
  margin: 0.5rem;
  background-color: #201f1f;
  @media (max-width: 500px) {
    display: flex;
    font-size: 0.8rem;
    gap: 3px;
  }
`;
/* ------------------input------------------- */
const Input = styled.input`
  /* display: block; */
  border: 0.5px solid ${({ theme }) => theme.hrColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: ${({ width }) => width};
  font-family:"TajawalRegular";
  &:focus {
    color: black;
    background-color: white;
  }
  @media (max-width: 500px) {
    /* flex-grow: 1;
    flex-shrink: 1; */
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;


/* ------------------input------------------- */


 

const TextInput = styled.textarea`
  border: 0.5px solid ${({ theme }) => theme.hrColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: ${({ width }) => width};
resize : vertical;
font-family: "TajawalRegular";

  &:focus {
    color: black;
    background-color: white;
  }
  @media (max-width: 500px) {
    /* flex-grow: 1;
    flex-shrink: 1; */
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;

const ImageInput = styled.input`
  display: none;
   
`;

const ImageLabelInput = styled.label`
  display: block;
  /* border: 1px solid; */
  width: ${({ width }) => width};
  border-radius: 8px;
  padding: .3rem;
  text-align: center;
  color: white;
  background-color: #ce6504;
  font-family: "CairoBold";
  box-shadow: 6px 4px 13px -7px rgba(0,0,0,0.75);
-webkit-box-shadow: 6px 4px 13px -7px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 4px 13px -7px rgba(0,0,0,0.75);
   
`;

/* ------------------------------------- */
export default {
  BodyWarper,
  Image,
  HeroImageWarper,
  Txt,
  Btn,
  FlexDiv,
  MenuArae,
  SectionBody,
  MenuTxt,
  ShowContentWarper,
  FieldSet,
  Input,
  Txtlabel,
  TextInput,
  ImageInput,
  ImageLabelInput
  
};
