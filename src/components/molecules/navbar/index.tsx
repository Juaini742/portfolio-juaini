import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import EachElement from "../Element";
import { navItems } from "../db";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 z-[999] h-14 bg-black/30 backdrop-blur-sm shadow-white shadow-round border-gray w-full flex items-center">
      <div className="container flex items-center justify-between text-white">
        <h4 className="font-anton text-[24]">JCODE PORTFOLIO</h4>
        <button
          onClick={handleVisible}
          className="text-[24] text-2xl p-1 border"
        >
          <RiMenu3Fill />
        </button>
      </div>
      <div
        className={` shadow-white shadow-round transform trans-300 h-screen w-[250px] absolute bg-black top-16 right-0 flex flex-col justify-start pt-10 items-center  gap-10 rounded-l-xl ${
          isVisible ? "translate-x-0" : "translate-x-80"
        }`}
      >
        <EachElement
          of={navItems}
          render={(item, index) => (
            <li key={index} className="text-white list-none  ">
              <NavLink
                to={item.path}
                className="px-5 py-2 text-xl uppercase rounded-full hover:bg-gray hover:text-black trans-300"
              >
                {item.name}
              </NavLink>
            </li>
          )}
        />
      </div>
    </nav>
  );
}

export default Navbar;
