import React from 'react'
import cpm from "./cpm";

import { AiOutlineEye } from "react-icons/ai";

import { FaRegComment } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";

function CardFooter() {
  return (
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
  )
}

export default CardFooter