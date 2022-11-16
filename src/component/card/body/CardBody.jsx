import React from 'react'
import cpm from "./cpm"
import imgx from "../../../assets/img1.jpg";
function CardBody({image,detail}) {
  return (
    <>
    <cpm.BodyWarper>
            <cpm.imageWarper>
                <cpm.Image src={image}/>
            </cpm.imageWarper>
{/* ----------------------- */}
            <cpm.subTitleWarper>
               {detail}
            </cpm.subTitleWarper>

      </cpm.BodyWarper>
</>


  )
}

export default CardBody