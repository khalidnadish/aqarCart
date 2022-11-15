import React from 'react'
import cpm from "./cpm"
import imgx from "../../../assets/img1.jpg";
function CardBody() {
  return (
    <>
    <cpm.BodyWarper>
            <cpm.imageWarper>
                <cpm.Image src={imgx}/>
            </cpm.imageWarper>
{/* ----------------------- */}
            <cpm.subTitleWarper>
                بسم الله الرحمن الرحيمبسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم
                الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم
                الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم
                الله الرحمن الرحيم بسم الله الرحمن الرحيم
            </cpm.subTitleWarper>

      </cpm.BodyWarper>
</>


  )
}

export default CardBody