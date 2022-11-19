import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineVideoCamera } from "react-icons/ai";
import  GoogleLocation from "../../component/googleMap/GoogleMap" 
import { AiOutlineComment } from "react-icons/ai";
import cpm from "./idpagecpm";

function IdPage({ data }) {
  const { id } = useParams();
  const [mydata, seMydata] = useState({
    id: id,
    title: "فيلا بحي السلامة",
    crDate: "10-10-2001",
    stutes: "ايجار",
    detail: `فيلا رووف للبيع 7 وصاله
      حي الاخضر
      مساحه كبيره
      مدخل خاص
      310 م صافي البناء
      وجهه شرقيه
      مصعد موسس
      خزانات وعداد مستقل
      تتكون من/
      7غرف وصاله وسيعه
      -مجلس خارجي مع دوره مياه
      -مجلط
      -مطبخ مع مستودع خاص
      -مجلس نساء مع دوره مياه خاصةً
      -4غرف نوم منها غرفتين ماستر
      سطح وسيع
      (بسعر مميز)
      للاستفسار كلمني واتس او أتصال 
      نخلص لكم كل الامور البنكية ونسدد الدفعة الأولى`,
    location: "location",
  });
  const [show, setShow] = useState(1);
  const [comp, setComp] = useState(<GenralInfo id={id} mydata={mydata} />);

  return (
    <cpm.BodyWarper>
      <SideMenu comp={comp} setComp={setComp} id={id} mydata={mydata} />
      <ShowBox childern={comp} />
    </cpm.BodyWarper>
  );
}

export default IdPage;

const SideMenu = ({ comp = "x", setComp, id, mydata }) => {
  console.log(mydata.id);
  return (
    <>
      <cpm.SideMenu>
        <cpm.InnerSideMenu>
          {/* -------------------------------------- */}
          <cpm.SideIconWarper
            onClick={() => {
              setComp(<GenralInfo id={id} mydata={mydata} />);
            }}
          >
            <MdOutlineRealEstateAgent />
          </cpm.SideIconWarper>
          {/* -------------------------------------- */}
          <cpm.SideIconWarper onClick={() => setComp(<Images id={id} />)}>
            <BsCardImage />
          </cpm.SideIconWarper>
          {/* -------------------------------------- */}
          <cpm.SideIconWarper onClick={() => setComp(<Videos id={id} />)}>
            <AiOutlineVideoCamera />
          </cpm.SideIconWarper>
          {/* -------------------------------------- */}
          <cpm.SideIconWarper onClick={() => setComp(<Comments id={id} />)}>
            <AiOutlineComment />
          </cpm.SideIconWarper>
        </cpm.InnerSideMenu>
      </cpm.SideMenu>
    </>
  );
};

const ShowBox = ({ childern }) => {
  return (
    <>
      <cpm.ShowContentWarper>{childern} </cpm.ShowContentWarper>
    </>
  );
};

const GenralInfo = ({ id, mydata }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <cpm.ContentWarper>
        {/* ------------------------------------------------ */}



        <cpm.FieldSet>
        <cpm.TXTtitleWraper dirx="column">
          <cpm.TXTtitle>رقم العرض</cpm.TXTtitle>
          <cpm.TXTdata> {mydata.id} </cpm.TXTdata>
        </cpm.TXTtitleWraper>
       
        {/* ------------------------------------------------ */}
        <cpm.TXTtitleWraper dirx="column">
          <cpm.TXTtitle>تاريخ النشر</cpm.TXTtitle>
          <cpm.TXTdata> {mydata.crDate} </cpm.TXTdata>
        </cpm.TXTtitleWraper>
        {/* ------------------------------------------------ */}
        <cpm.TXTtitleWraper dirx="column">
          <cpm.TXTtitle>نوع العرض</cpm.TXTtitle>
          <cpm.TXTdata> {mydata.stutes} </cpm.TXTdata>
        </cpm.TXTtitleWraper>
        </cpm.FieldSet>



         {/* ------------------------------------------------ */}
         <cpm.TXTtitleWraper>
          <cpm.TXTdata> {mydata.title} </cpm.TXTdata>
        </cpm.TXTtitleWraper>
        {/* ------------------------------------------------ */}
        <cpm.TXTtitleWraper>
          <cpm.TXTdata align="right"> {mydata.detail} </cpm.TXTdata>
        </cpm.TXTtitleWraper>
        {/* ------------------------------------------------ */}
        <cpm.TXTtitleWraper border="none" onClick={()=>{setOpen(true)}}>
          <cpm.TXTBtn>خريطة جوجل</cpm.TXTBtn>
        </cpm.TXTtitleWraper>
        {/* ------------------------------------------------ */}
      </cpm.ContentWarper>
      {open && <GoogleLocation open={open} setOpen={setOpen} lat={"150"} lng={2500} image="/img/map1.jpg"/>}
    </>
  );
};

const Images = ({ id }) => {
  return (
    <>
      <cpm.ContentWarper>image </cpm.ContentWarper>
    </>
  );
};

const Videos = ({ id }) => {
  return (
    <>
      <cpm.ContentWarper>Videos </cpm.ContentWarper>
    </>
  );
};

const Comments = ({ id }) => {
  return (
    <>
      <cpm.ContentWarper>Comments </cpm.ContentWarper>
    </>
  );
};
