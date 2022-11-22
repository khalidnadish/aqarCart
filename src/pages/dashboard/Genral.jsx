import React, { useRef, useState, useEffect } from "react";
import cpm from "./dashbordCpm";
import Card from "./CardCpm";
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
  const RefFrom = useRef();

  const { data, isLoading, isFetched } = useGetdata();
  if (isLoading) {
    return <div>Loadin....</div>;
  }

  if (isFetched) {
    // nameRef.current.value=data.data?.name
  }

  //  document.getElementById('fname').value = '1000';

  const handleData = (e) => {
    e.preventDefault();
    const formData = new FormData(myform);
    console.log([...formData]);

    const sendData = axios
      .post("http://localhost:3000/aqar/savenewinfo", {
        id: Refid.current.value,
        name: Refname.current.value,
        logo: Reflogo.current.value,
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
        Reflocation: Refatt.current.value,
      })
      .then(toast.info("بنجاح تم تاسيس المعلومات الاساسية للمنصة"));
  };

  return (
    <>
      <cpm.BodyWarper>
        <DataForm
          data={data}
          handleData={handleData}
          Refid={Refid}
          Refname={Refname}
          Reflogo={Reflogo}
          Refphone={Refphone}
          Refheroimage={Refheroimage}
          Refherotext={Refherotext}
          Refherodeail={Refherodeail}
          Refemail={Refemail}
          Refsnapsot={Refsnapsot}
          Refwhatapp={Refwhatapp}
          Refinstgram={Refinstgram}
          Refadrs={Refadrs}
          Reflat={Reflat}
          Refatt={Refatt}
          Reflocation={Reflocation}
          RefFrom={RefFrom}
        />
      </cpm.BodyWarper>
    </>
  );
};
export default Genral;

const DataForm = ({
  data,
  handleData,
  Refid,
  Refname,
  Reflogo,
  Refphone,
  Refheroimage,
  Refherotext,
  Refherodeail,
  Refemail,
  Refsnapsot,
  Refwhatapp,
  Refinstgram,
  Refadrs,
  Reflat,
  Refatt,
  Reflocation,
  RefFrom,
}) => {
  return (
    <>
      <Card.NormalDivr>
        <form onSubmit={handleData} id="myform">
          <Card.CardWraper>
            <Card.CardHeader>معلومات عامة</Card.CardHeader>
            <Card.CardBody>
              <cpm.Input
                ref={Refid}
                defaultValue={data.data?.id}
                width={"10%"}
                placeholder="id"
                name="id"
              />
              <cpm.Input
                type="text"
                id="fname"
                name="name"
                defaultValue={data.data.name}
                ref={Refname}
                width={"80%"}
                placeholder="name"
              />
              <cpm.Input
                defaultValue={data.data.phone}
                width={"45%"}
                placeholder="phone"
                maxLength="10"
                ref={Refphone}
                name="phone"
              />
              <cpm.ImageLabelInput for="logoimage" width={"45%"}>
                صورة الشعار
              </cpm.ImageLabelInput>
              <cpm.ImageInput
                ref={Reflogo}
                onChange={(e)=>alert(e.target.value)}
                placeholder="logoimage"
                name="logoImage"
                type={"file"}
                id="logoimage"
              />
            </Card.CardBody>
          </Card.CardWraper>

          {/* ---------------------------------------- */}
          <Card.CardWraper>
            <Card.CardHeader>الصفحة الرئسية</Card.CardHeader>
            <Card.CardBody>
              <cpm.Input
                defaultValue={data.data.herotext}
                ref={Refherotext}
                width={"45%"}
                placeholder="herotext"
                name="heroText"
              />
              <cpm.ImageLabelInput for="HeroImage" width={"45%"}>
               صورة الواجهة الرئسيه
              </cpm.ImageLabelInput>
              <cpm.ImageInput
                ref={Refheroimage}
                width={"45%"}
                // defaultValue={data.data.heroimage}
                placeholder="heroimage"
                name="HeroImage"
                type={"file"}
                id="HeroImage"
              />
              <cpm.TextInput
                defaultValue={data.data.herodeail}
                placeholder="heroDetail"
                width={"95%"}
                rows={"5"}
                name="HeroDetail"
                ref={Refherodeail}
              />
            </Card.CardBody>
          </Card.CardWraper>

          <Card.CardWraper>
            <Card.CardHeader> التواصل الاجتماعي</Card.CardHeader>
            <Card.CardBody>
              <cpm.Input
                defaultValue={data.data.email}
                width={"45%"}
                placeholder="email"
                ref={Refemail}
                name="email"
              />
              <cpm.Input
                defaultValue={data.data.instgram}
                width={"45%"}
                placeholder="instgram"
                ref={Refinstgram}
                name="instgram"
              />
              <cpm.Input
                defaultValue={data.data.snapsot}
                width={"45%"}
                placeholder="snapshot"
                ref={Refsnapsot}
                name="snapshot"
              />
              <cpm.Input
                defaultValue={data.data.whatapp}
                width={"45%"}
                placeholder="whats app"
                ref={Refwhatapp}
                name="whatsapp"
              />
            </Card.CardBody>
          </Card.CardWraper>

          <Card.CardWraper>
            <Card.CardHeader> الموقع</Card.CardHeader>
            <Card.CardBody>
              <cpm.Input
                defaultValue={data.data.adrs}
                placeholder="location"
                width={"100%"}
                ref={Refadrs}
                name="adrs"
              />
              <cpm.Input
                defaultValue={data.data.lat}
                placeholder="lat"
                width={"30%"}
                ref={Reflat}
                name="lat"
              />
              <cpm.Input
                defaultValue={data.data.att}
                placeholder="lan"
                width={"30%"}
                ref={Refatt}
                name="lan"
              />
              <cpm.ImageLabelInput for="locationImage" width={"45%"}>
               صورة الخريطة
              </cpm.ImageLabelInput>
              <cpm.ImageInput
                ref={Reflocation}
                // defaultValue={data.data.location}
                width={"30%"}
                placeholder="loc Image"
                name="locationImage"
                type={"file"}
                id="locationImage"
              />
            </Card.CardBody>
          </Card.CardWraper>

          <cpm.Btn type="submit">حفظ التعديلات</cpm.Btn>
        </form>
      </Card.NormalDivr>
    </>
  );
};
