import React,{ useEffect, useRef} from "react";
import global from "../../global/global";
import cpm from "./cpm"
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiLandscapeLine } from "react-icons/ri";
import { MdOutlinePriceCheck } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";



let useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};




function CardMenu({ menu, setMenu }) {
  let domNode = useClickOutside(() => {
    setMenu(false);
  });
  return (
    <cpm.Container
    ref={domNode}
    >
      <cpm.MenuHeaderItemWrper open={menu}
      onClick={() => {
        setMenu(false);
      }}>
        <cpm.MenuIcon>
        </cpm.MenuIcon>
          <IoMdArrowRoundBack />
        <cpm.MenuItem>عودة</cpm.MenuItem>
      </cpm.MenuHeaderItemWrper>
      <global.Hr />
{/* ---------------------------------------- */}
      <cpm.MenuItemWrper>
        <cpm.MenuItem>طلب معاينة</cpm.MenuItem>
        <cpm.MenuIcon>
          <RiLandscapeLine  />
        </cpm.MenuIcon>
      </cpm.MenuItemWrper>
{/* ----------------------------------------  */}
      <cpm.MenuItemWrper>
        <cpm.MenuItem>طلب اتصال</cpm.MenuItem>
        <cpm.MenuIcon>
          <BiPhoneCall />
        </cpm.MenuIcon>
      </cpm.MenuItemWrper>
{/* ---------------------------------------- */}      
      <cpm.MenuItemWrper>
        <cpm.MenuItem>طلب سعر نهائي</cpm.MenuItem>
        <cpm.MenuIcon>
          <MdOutlinePriceCheck />
        </cpm.MenuIcon>
      </cpm.MenuItemWrper>      




    </cpm.Container>
  );
}

export default CardMenu;
