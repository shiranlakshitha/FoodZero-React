import { useState } from "react";
import assets from "../assets/assets";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems = [
    "Home",
    "Menu",
    "Blog",
    "About",
    "Contact"
  ]

  const handleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {!isOpen && (
        <nav className={`${location.pathname === '/' ? 'bg-[#233000]' : ''} p-5 flex w-full justify-between items-center`}>
          <div className="flex flex-row max-w-[350px] gap-[50px] items-center justify-between">
            <img src={assets.logo} width={200} alt="" />
            <CiMenuBurger
              onClick={handleMenu}
              className="text-white"
              size={40}
            />
          </div>
          <div className="flex justify-between items-center gap-10">
            <p className="text-white">+94-5587123</p>
            <div className="text-[12px] text-white border-1 rouned-2xl px-4 py-2">
              Reservations
            </div>
          </div>
        </nav>
      )}
      {isOpen && (
        <div className="w-full h-screen relative transition-all duration-300 flex max-md:justify-center">
          <div className="fixed inset-0 w-full h-full">
            <img
              src={assets.navbg}
              className="w-full h-full object-cover z-10"
              alt=""
            />
          </div>
          <div className="fixed inset-0 h-screen bg-[#233000]/50 z-20"></div>
          <button
            onClick={handleMenu}
            className="fixed left-5 top-5 z-60 cursor-pointer"
          >
            <IoMdClose className="text-white" size={40} />
          </button>
          <div className="relative z-50">
            <ul className="text-3xl md:text-5xl lg:text-7xl text-white max-w-[300px] flex flex-col  gap-6 md:ml-[250px] py-[150px]">
              {menuItems.map((item, index) => (
                <li className="cursor-pointer" key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="lg:block hidden absolute z-40 bottom-[200px] right-[100px] w-[250px] text-white">
            <div className="py-3 border-b-1 border-dotted">
              <h3 className="text-2xl font-semibold">Contact</h3>
            </div>
            <div className="py-3">
              <p>Info</p>
              <p>info@example.com</p>
            </div>
            <div className="py-3">
              <p>Address</p>
              <p>123 Main St, Anytown, USA</p>
            </div>
            <div className="py-3 flex flex-row gap-3 items-center">
              <FaInstagram />
              <FaTwitter />
              <FaFacebookSquare />
              <FaYoutube />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
