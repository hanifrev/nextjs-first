import React, {useState,useEffect} from "react";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
//import MobileMenu from "./menus/MobileMenu";
export default function Foobar() {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = ()=>setIsOpen(current=>!current)
  return (
    <div>
      <MenuButton click={toggle} />
      <MobileMenu isOpen={isOpen} click={toggle} />
    </div>
  );
}
