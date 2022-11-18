import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DiloagShow from "../dailog/DiloagShow";

const Btn = styled.button`
  outline: none;
  padding: 0.5rem;
  min-width: 5rem;
  font-family: "Cairo";
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
`;

const copyBtn1 = styled.button`
  outline: none;
  padding: 0.5rem;
  min-width: 5rem;
  font-family: 'Cairo', sans-serif;
  border-radius: 18px;
  border: none;
  /* background-color: ${({ iscopy }) => iscopy  ? "gold":"lightgreen"} ; */
  background-color: gold;
  color: ${({ theme }) => theme.text};
`;


const Txt = styled.p`
  outline: none;
  padding: 0.2rem 1rem;
font-size:1rem;
  min-width: 5rem;
  font-family: "Cairo";
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.textSoft};
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 500px) {
    font-size:.85rem;
   
  }

`;

const ImageWraper = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: azure; */
  /* padding: 0.5rem; */
`;

const Image = styled.img`
  /* min-width: 200px; */
  max-width: 100%;
  max-height: 100%;
  height: auto;
  /* object-fit: scale-down; */
  background-color: #000;
`;

const ActionWraper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 100%;
  /* background-color: #000; */
  /* padding: 0.5rem; */
`;

const ImageActionWraper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  height: 100%;
  /* background-color: green; */
  padding: 0.5rem;
`;

function GoogleLocation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>GoogleMap</div>
      <Btn onClick={() => setOpen(true)}>عرض الخريظة</Btn>
      <Btn>ارسال ايميل</Btn>

      {open && (
        <DiloagShow
          open={open}
          toggle={setOpen}
          title={"عرض الخريطه"}
          children={<MapImage />}
          
        />
      )}
    </>
  );
}

export default GoogleLocation;

const MapImage = ({lat=0.000,att=0.001}) => {
  const [iscopy,setIscopy]=useState(false);

  const handleCopy=()=>{
    navigator.clipboard.writeText(`${lat},${att}`);
    setIscopy(!iscopy)
  }



  return (
    <>
      <ImageActionWraper>
        <ActionWraper>

          <Btn iscopy={iscopy} onClick={handleCopy}>
            {iscopy ? <>تم النسخ  </>:<> نسخ</> }
          </Btn>

          <Txt>خط الطول : {lat}</Txt>
          <Txt>خط العرض : {att}</Txt>
        </ActionWraper>
        <ImageWraper>
          <Image src="./img/map1.jpg" />
        </ImageWraper>
      </ImageActionWraper>
    </>
  );
};
