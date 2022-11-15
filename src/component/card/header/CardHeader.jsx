import React from 'react'
import headerCpm from "./headerCpm";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
function CardHeader({setMenu}) {
  return (
    <headerCpm.headerWarper>
        <headerCpm.iconWarper onClick={()=>{setMenu(true)}} >
          <HiOutlineMenuAlt2 />
        </headerCpm.iconWarper>
        <headerCpm.headerTitleWarper>
          فيلا بالمحمدية
        </headerCpm.headerTitleWarper>
        <headerCpm.headerTypeWarper>ايجار</headerCpm.headerTypeWarper>
      </headerCpm.headerWarper>
  )
}
export default CardHeader