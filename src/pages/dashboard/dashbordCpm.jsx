import styled from "styled-components";

/* ------------------------------------- */
const BodyWarper = styled.div`
  display: flex;
  position: relative;
  /* justify-content: space-between; */
  flex-direction: column;
  width: 90%;
  height: calc(100vh - 120px);
  margin: auto;
  color: ${({ theme }) => theme.text};
  gap: 1rem;
  overflow: auto;
  @media (max-width: 500px) {
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
  width:${({ width }) => width};
  color: ${({ theme }) => theme.text};
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
/* ------------------------------------- */
const Btn = styled.button`
  outline: none;
  padding: 0.2rem 1rem;
  /* min-width: 5rem; */
  font-family: "CairoBold";
  border-radius: 8px;
  border: 1px solid;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

/* ------------------------------------- */
const ShowContentWarper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0px;
  width: 100%;
  height: calc(100vh - 200px);
  justify-content: center;
  align-items: center;
  background-color: #525151;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  @media (max-width: 500px) {
    width: 100%;
    top: 60px;
    left: 0;
    height: calc(100vh - 220px);
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
  /* padding: 15px; */
  /* margin: 5px 0; */
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
  color: ${({ theme }) => theme.text};
  @media (max-width: 500px) {
    font-size: 0.8rem;
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
  margin: .5rem;
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
  width:${({ width }) => width};
  &:focus {
    color: black;
    background-color: white;
  }
  @media (max-width: 500px) {
    /* flex-grow: 1;
    flex-shrink: 1; */
    font-size: 0.8rem;
    width:${({ width }) => width};
  }
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
};
