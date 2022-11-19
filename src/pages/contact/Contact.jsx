import React, { useState } from "react";
import GoogleMap from "../../component/googleMap/GoogleMap";
import styled from "styled-components";
import { toast } from "react-toastify";
import cpm from "./ContactCpm";
// import data from "./data.json";

function Contact({
  lat = 0.0,
  att = 0.001,
  mobile = "0500000000",
  adr = "جدة الممكة العلربية السعودية ",
  email = "devnadish.gmail.com",
}) {
  const [iscopy, setIscopy] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(`${lat},${att}`);
    setIscopy(!iscopy);
    toast.success("تم حفظ الاحداثيات انسخها لجوجل ماب  لتصل الينا بالسلامة");
  };
  return (
    <cpm.BodyWarper>
      
      <cpm.RightArea>
            
              <cpm.Txt>رقم الجوال : {mobile}</cpm.Txt>
              <cpm.Txt>العنوان : {adr}</cpm.Txt>
              <cpm.Txt>الايميل : {email}</cpm.Txt>
             
      </cpm.RightArea>
{/* =============================================== */}
      <cpm.LeftArea>
            <cpm.HeroImageWarper>
              <cpm.Image src="./img/map1.jpg" />
            </cpm.HeroImageWarper>
            <cpm.FlexDiv direction="row">
              <cpm.Btn iscopy={iscopy} onClick={handleCopy}>
                {iscopy ? <>تم النسخ </> : <> نسخ</>}
              </cpm.Btn>
              <cpm.Txt>خط الطول : {lat}</cpm.Txt>
              <cpm.Txt>خط العرض : {att}</cpm.Txt>
            </cpm.FlexDiv>
      </cpm.LeftArea>

    </cpm.BodyWarper>
  );
}

export default Contact;
