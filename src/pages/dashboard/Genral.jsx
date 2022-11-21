import React, { useRef, useState, useEffect } from "react";
import cpm from "./dashbordCpm";
import { useGetdata } from "../../component/utils/hooks/useGetdata";
import axios from "axios";
import { toast } from "react-toastify";
const Genral = () => {
  const Refid = useRef();
  const Refname = useRef();
  const Reflogo = useRef();
  const Refphone = useRef();
  const Refheroimage = useRef();
  const Refherotext = useRef();
  const Refherodeail = useRef();
  const Refemail = useRef();
  const Refsnapsot = useRef();
  const Refwhatapp = useRef();
  const Refinstgram = useRef();
  const Refadrs = useRef();
  const Reflat = useRef();
  const Refatt = useRef();
  const Reflocation = useRef();

  const { data, isLoading, isFetched } = useGetdata();
  if (isLoading) {
    return <div>Loadin....</div>;
  }

  if (isFetched) {
    // nameRef.current.value=data.data?.name
  }

  //  document.getElementById('fname').value = '1000';

  const handleData = () => {
    const sendData = axios.post("http://localhost:3000/aqar/savenewinfo", {
      id: Refid.current.value,
      name: Refname.current.value,
      logo: Reflogo.current.value ,
      heroimage: Refheroimage.current.value,
      phone: Refphone.current.value,
      herotext: Refherotext.current.value,
      herodeail: Refherodeail.current.value,
      email: Refemail.current.value,
      snapsot: Refsnapsot.current.value,
      whatapp: Refwhatapp.current.value,
      instgram: Refinstgram.current.value,
      adrs: Refadrs.current.value,
      lat: Reflat.current.value,
      att: Refatt.current.value,
      Reflocation:Refatt.current.value,
    }).then(
      toast.info("بنجاح تم تاسيس المعلومات الاساسية للمنصة")
    );
  };

  return (
    <>
      <cpm.BodyWarper>
     
        {/* ---------------------------------------- */}
        <cpm.FieldSet>
          <legend>معلومات عامة</legend>
          <cpm.FlexDiv direction="row">
            <cpm.Input
              ref={Refid}
              defaultValue={data.data?.id}
              width={"10%"}
              placeholder="id"
            />
            <cpm.Input
              type="text"
              id="fname"
              name="fname"
              defaultValue={data.data.name}
              ref={Refname}
              width={"80%"}
              placeholder="name "
            />
            <cpm.Input
              defaultValue={data.data.phone}
              width={"80%"}
              placeholder="phone"
              maxLength="10"
              ref={Refphone}
            />
              <cpm.Input ref={Reflogo}  defaultValue={data.data.logoimage}   width={"10%"} placeholder="logoimage"/> 
             
          </cpm.FlexDiv>
        </cpm.FieldSet>
        {/* ---------------------------------------- */}
        <cpm.FieldSet>
          <legend>الصفحة الرئسية</legend>
          <cpm.FlexDiv direction="row">
            <cpm.Input
              defaultValue={data.data.herotext}
              ref={Refherotext}
              placeholder="herotext"
            />
            <cpm.Input ref={Refheroimage}  defaultValue={data.data.heroimage}  placeholder="heroimage"/> 
            <cpm.Input
              defaultValue={data.data.herodeail}
              placeholder="heroDetail"
              width={"100%"}
              ref={Refherodeail}
            />
          </cpm.FlexDiv>
        </cpm.FieldSet>
        {/* ---------------------------------------- */}
        <cpm.FieldSet>
          <legend>التواصل الاجتماعي</legend>
          <cpm.FlexDiv direction="row">
            <cpm.Input
              defaultValue={data.data.email}
              width={"49%"}
              placeholder="email"
              ref={Refemail}
            />
            <cpm.Input
              defaultValue={data.data.instgram}
              width={"49%"}
              placeholder="instgram"
              ref={Refinstgram}
            />
            <cpm.Input
              defaultValue={data.data.snapsot}
              width={"49%"}
              placeholder="snapshot"
              ref={Refsnapsot}
            />
            <cpm.Input
              defaultValue={data.data.whatapp}
              width={"49%"}
              placeholder="whats app"
              ref={Refwhatapp}
            />
          </cpm.FlexDiv>
        </cpm.FieldSet>
        {/* ---------------------------------------- */}
        <cpm.FieldSet>
          <legend>الموقع</legend>
          <cpm.FlexDiv>
            <cpm.Input
              defaultValue={data.data.adrs}
              placeholder="location"
              width={"100%"}
              ref={Refadrs}
            />
            <cpm.Input
              defaultValue={data.data.lat}
              placeholder="lat"
              width={"30%"}
              ref={Reflat}
            />
            <cpm.Input
              defaultValue={data.data.att}
              placeholder="lan"
              width={"30%"}
              ref={Refatt}
            />
             <cpm.Input ref={Reflocation}  defaultValue={data.data.location}   width={"30%"} placeholder="loc Image"/> 
          </cpm.FlexDiv>
        </cpm.FieldSet>

        <cpm.Btn onClick={() => handleData()}>حفظ التعديلات</cpm.Btn>
        
      </cpm.BodyWarper>
    </>
  );
};
export default Genral;
