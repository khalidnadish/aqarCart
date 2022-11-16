import React,{ useEffect, useRef} from "react";
import Style from "./AppHeeaderStyle";
import { AiOutlineMenuUnfold } from "react-icons/ai";

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




function Sidemenu({ open, setOpen }) {
  let domNode = useClickOutside(() => {
    setOpen(false);
  });
  return (
    <Style.SideMenu ref={domNode}>
      {/* ---------- BackIcon ---------- */}
      <Style.BackIconMenuWraper
        onClick={() => {
          
          setOpen(false);
        }}
      >
        <AiOutlineMenuUnfold />
        <Style.MenuItem> عودة</Style.MenuItem>
      </Style.BackIconMenuWraper>
    </Style.SideMenu>
  );
}

export default Sidemenu;
