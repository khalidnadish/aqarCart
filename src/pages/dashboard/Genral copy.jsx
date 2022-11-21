import React,{useState} from "react";
import cpm from "./dashbordCpm";
import { useQuery } from '@tanstack/react-query'
import axios from "axios"



const Genral = () => {
  
  const getData = () =>{
    return  axios.get("http://localhost:3000/aqar/getdata")
  }
  const {data,isLoading}=useQuery(['editInfo'],getData)
  if (isLoading){return <div>loading....</div>}
  
  const [UPDid,setUPDid]=useState(data.data.id)
  const [UPDname,setUPDname]=useState(data.data.name)
  const [UPDphone,setUPDphone]=useState(data.data.phone)
  const [UPDheroimage,setUPDheroimage]=useState(data.data.heroimage)
  const [UPDherotext,setUPDherotext]=useState(data.data.herotext)
  const [UPDherodeail,setUPDherodeail]=useState(data.data.herodeail)
  const [UPDemail,setUPDemail]=useState(data.data.email)
  const [UPDsnapsot,setUPDsnapsot]=useState(data.data.snapsot)
  const [UPDwhatapp,setUPDwhatapp]=useState(data.data.whatapp)
  const [UPDinstgram,setUPDinstgram]=useState(data.data.instgram)
  const [UPDadrs,setUPDadrs]=useState(data.data.adrs)
  const [UPDlocation,setUPDlocation]=useState(data.data.location)
  const [UPDlat,setUPDlat]=useState(data.data.lat)
  const [UPDatt,setUPDatt]=useState(data.data.att)
  // console.count("reder")
 


  return (
    <>
      <cpm.BodyWarper>
        <cpm.Txt></cpm.Txt>
        {/* ---------------------------------------- */}
        <cpm.FieldSet>
          <legend>معلومات عامة</legend>
          <cpm.FlexDiv direction="row">
          
              <cpm.Input  value={UPDid} onChange={(e)=>setUPDid(e.target.value)} width={"10%"} placeholder="id" disabled />
              <cpm.Input  value={UPDname} onChange={(e)=>setUPDname(e.target.value)}   width={"80%"} placeholder="name " />
              <cpm.Input  value={UPDphone} onChange={(e)=>setUPDphone(e.target.value)} width={"80%"} placeholder="phone" maxLength="10" />
              <cpm.Txt width={"15%"}>logo</cpm.Txt>
                   
          </cpm.FlexDiv>
        </cpm.FieldSet>
        {/* ---------------------------------------- */}
        <cpm.FieldSet>
          <legend>الصفحة الرئسية</legend>
          <cpm.FlexDiv direction="row">
          <cpm.Input value={UPDherotext} onChange={(e)=>setUPDherotext(e.target.value)}  placeholder="herotext" />
          <cpm.Txt>heroimage</cpm.Txt>
          <cpm.Input  value={UPDherodeail} onChange={(e)=>setUPDherodeail(e.target.value)} placeholder="heroDetail"   width={"100%"}/>
          </cpm.FlexDiv>
        </cpm.FieldSet>
        {/* ---------------------------------------- */}
        <cpm.FieldSet>
          <legend>التواصل الاجتماعي</legend>
          <cpm.FlexDiv direction="row">
          <cpm.Input value={UPDemail} onChange={(e)=>setUPDemail(e.target.value)} width={"49%"} placeholder="email" />
          <cpm.Input value={UPDinstgram} onChange={(e)=>setUPDinstgram(e.target.value)} width={"49%"} placeholder="instgram" />
          <cpm.Input value={UPDsnapsot} onChange={(e)=>UPDsnapsot(e.target.value)} width={"49%"} placeholder="snapshot" />
          <cpm.Input value={UPDwhatapp} onChange={(e)=>setUPDname(e.target.value)} width={"49%"} placeholder="whats app" />
          </cpm.FlexDiv>
        </cpm.FieldSet>
        {/* ---------------------------------------- */}
        <cpm.FieldSet>
          <legend>الموقع</legend>
          <cpm.FlexDiv>
          <cpm.Input value={UPDadrs} onChange={(e)=>setUPDadrs(e.target.value)} placeholder="location"   width={"100%"} />
          <cpm.Input value={UPDlat} onChange={(e)=>setUPDlat(e.target.value)} placeholder="lat"   width={"49%"} />
          <cpm.Input value={UPDatt} onChange={(e)=>setUPDatt(e.target.value)}  placeholder="lan"   width={"49%"} />
          </cpm.FlexDiv>
        </cpm.FieldSet>
        
        <cpm.Btn >حفظ التعديلات</cpm.Btn>
       
      </cpm.BodyWarper>
    </>
  );
};
export default Genral;
