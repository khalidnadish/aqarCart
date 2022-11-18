import React,{useState} from "react";
import cpm from "./cpm";
import CardHeader from "./header/CardHeader";
import CardFooter from "./footer/CardFooter";
import CardBody from "./body/CardBody";
import CardMenu from "./cardmenu/CardMenu";
import DiloagShow from  "../dailog/DiloagShow"
import ViewRequst from "../card/ViewRequst/ViewRequst"


const MiniCard = ({ data}) => {
const [menu,setMenu]=useState(false)
const [open, setOpen] = useState(false);
  const [dailoTitle, setDailoTitle] = useState("");
   

  return (
    <>
    <cpm.Container type={data.type}>
    <cpm.ActionBtn onClick={()=>setOpen(true)}/>
      <CardHeader setMenu={setMenu} title={data.header} type={data.type} />
      <CardBody image={data.img} detail={data.detail}/>
      <CardFooter commentCounter={data.commentCounter} create={data.create} seeCounter={data.seeCounter} />
      {menu && <CardMenu menu={menu} setMenu={setMenu}/>}
    </cpm.Container>

    {open && (
        <DiloagShow
          open={open}
          toggle={setOpen}
          title={"يسعدني خدمتك"}
          children={<ViewRequst data={data}/>}
        />
      )}
    </>

     


  );
};

export default MiniCard;
