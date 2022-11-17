import React,{useState} from "react";
import cpm from "./cpm";
import CardHeader from "./header/CardHeader";
import CardFooter from "./footer/CardFooter";
import CardBody from "./body/CardBody";
import CardMenu from "./cardmenu/CardMenu";



const MiniCard = ({ data}) => {
const [menu,setMenu]=useState(false)
  return (
    <cpm.Container type={data.type}>
      <CardHeader setMenu={setMenu} title={data.header} type={data.type} />
      <CardBody image={data.img} detail={data.detail}/>
      <CardFooter commentCounter={data.commentCounter} create={data.create} seeCounter={data.seeCounter} />
      {menu && <CardMenu menu={menu} setMenu={setMenu}/>}
    </cpm.Container>

     


  );
};

export default MiniCard;
