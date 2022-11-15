import React,{useState} from "react";
import cpm from "./cpm";
import headerCpm from "./headerCpm";
import CardMenu from "./CardMenu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";

import { FaRegComment } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";

import imgx from "../../assets/img1.jpg";

const MiniCard = ({ title, detail, sts = "مجاني", color = "crimson" }) => {
const [menu,setMenu]=useState(false)
  return (
    <cpm.Container>
{/* **************************  Header **************************  */}
      <headerCpm.headerWarper>
        <headerCpm.iconWarper onClick={()=>{setMenu(true)}} >
          <HiOutlineMenuAlt2 />
        </headerCpm.iconWarper>
        <headerCpm.headerTitleWarper>
          فيلا بالمحمدية
        </headerCpm.headerTitleWarper>
        <headerCpm.headerTypeWarper>ايجار</headerCpm.headerTypeWarper>
      </headerCpm.headerWarper>
{/* **************************  Image **************************  */}
      <cpm.imageWarper>
        <cpm.Image src={imgx}/>
      </cpm.imageWarper>
{/* **************************  Titile **************************  */}      
      <cpm.subTitleWarper>
        بسم الله الرحمن الرحيمبسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم
        الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم
        الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم
        الله الرحمن الرحيم بسم الله الرحمن الرحيم
      </cpm.subTitleWarper>
{/* **************************  Footer **************************  */}      
      <cpm.actionWarper>
        {/* -------------------------------------------- */}
        <cpm.footeIconWithTextWarper>
          <cpm.footeIconWarper>
            <AiOutlineEye />
          </cpm.footeIconWarper>
          <cpm.footeIconTextWarper>1500</cpm.footeIconTextWarper>
        </cpm.footeIconWithTextWarper>
        {/* -------------------------------------------- */}
        <cpm.footeIconWithTextWarper>
          <cpm.footeIconWarper>
            <FaRegComment />
          </cpm.footeIconWarper>
          <cpm.footeIconTextWarper>100</cpm.footeIconTextWarper>
        </cpm.footeIconWithTextWarper>
        {/* -------------------------------------------- */}
        <cpm.footeIconWithTextWarper>
          <cpm.footeIconWarper>
            <MdDateRange />
          </cpm.footeIconWarper>
          <cpm.footeIconTextWarper>10-10-2022</cpm.footeIconTextWarper>
        </cpm.footeIconWithTextWarper>
        {/* -------------------------------------------- */}
        <cpm.footeIconWithTextWarper>
          <cpm.footeIconWarper>
            <BsImage />
          </cpm.footeIconWarper>
          <cpm.footeIconTextWarper>10</cpm.footeIconTextWarper>
        </cpm.footeIconWithTextWarper>
        {/* -------------------------------------------- */}
        <cpm.footeIconWithTextWarper>
          <cpm.footeIconWarper>
            <FiVideo />
          </cpm.footeIconWarper>
          <cpm.footeIconTextWarper>15</cpm.footeIconTextWarper>
        </cpm.footeIconWithTextWarper>
      </cpm.actionWarper>
      {/* <cpm.CardHeaderWraper></cpm.CardHeaderWraper> */}

      {/* <SubTitle xdata={title}/> */}
      {menu && <CardMenu menu={menu} setMenu={setMenu}/>}
    </cpm.Container>
  );
};

export default MiniCard;
