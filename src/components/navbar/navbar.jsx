import React from "react";
import Logo from "../../assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-3">
        <div className="container mx-auto flex items-center gap-4 px-4">
          <div className="shrink-0">
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-2xl sm:text-3xl"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              Shopy
            </a>
          </div>
          {/* search + cart */}
          <div className="flex flex-1 items-center justify-center gap-3">
            <div className="relative group hidden sm:block w-10 hover:w-72 transition-all duration-300 z-[999]">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-4 opacity-0 transition-all duration-300
                focus:outline-none focus:border-primary
                group-hover:opacity-100
                dark:border-gray-500
                dark:bg-gray-800"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors duration-200 group-hover:text-primary" />
            </div>
            {/* order button */}
            <button
              onClick={() => alert("This feature is currently not available")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-2 px-4 rounded-full flex items-center gap-3 group shrink-0"
            >
              <span className="hidden group-hover:block transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
          <div className="shrink-0">
            {/* Darkmode Switch */}
            <DarkMode />
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex justify-center ">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown
                  className="transition-all 
                    duration-200
                    group-hover:rotate-180
                    "
                />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md ">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
