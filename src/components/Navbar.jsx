import { useState } from "react";
import styles from "../style";
import{Link} from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
    <img src={logo} alt="Crbonout" className="w-[100px] h-[60px]" />
</a>
    <h3 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">CarbonOut</h3>
  
  
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
              {active === nav.title && (
                <img
                  src={nav.img}
                  alt="star"
                  className="w-[40px] h-[40px] object-contain inline-block ml-2 rounded-full hover:rounded-3xl"
                />
              )}
            </a>
          </li>
        ))}
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite ml-10">
        <Link to="/gallery">Gallery</Link>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                  {active === nav.title && (
                    <img
                      src={nav.img}
                      alt="star"
                      className="w-[30px] h-[30px] object-contain inline-block ml-2 rounded-full hover:rounded-3xl"
                    />
                  )}
                </a>
              </li>
            ))}
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite ml-10">
        <Link to="/gallery">Gallery</Link>
        </li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
