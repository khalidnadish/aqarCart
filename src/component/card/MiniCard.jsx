import React,{useState} from "react";
import cpm from "./cpm";
import CardHeader from "./header/CardHeader";
import CardFooter from "./footer/CardFooter";
import CardBody from "./body/CardBody";
import CardMenu from "./cardmenu/CardMenu";



const MiniCard = ({ title, detail, sts = "مجاني", color = "crimson" }) => {
const [menu,setMenu]=useState(false)
  return (
    <cpm.Container>
      <CardHeader setMenu={setMenu}/>
      <CardBody/>
      <CardFooter/>
      {menu && <CardMenu menu={menu} setMenu={setMenu}/>}
    </cpm.Container>

     


  );
};

export default MiniCard;
