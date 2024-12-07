import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Search, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dp, setDp] = useState(false);
  const [dp1, setDp1] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const hdt = () => {
    setDp(!dp);
  };

  const hdt1 = () => {
    setDp1(!dp1);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown") &&
        !event.target.closest(".dropdown1") &&
        !event.target.closest(".dropdown2")
      ) {
        setDp(false);
        setDp1(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#A3151A] flex justify-between items-center text-xl text-white">
        <div className="p-4 flex items-center gap-6">
          <img
            src={logo}
            alt="Logo"
            className="shadow-black shadow-xl rounded-full cursor-pointer h-auto w-1/6"
          />
          <h1
            className="text-3xl font-bold cursor-pointer"
            onClick={() => navigate("/home")}
          >
            HealthNet
          </h1>
        </div>

        <div className="flex border-y-4 border-x-2 rounded-3xl p-2 bg-white">
          <form>
            <input type="search" className="form-input" placeholder="Search" />
          </form>
          <Search className="text-gray-500" />
        </div>
        <div className=" flex  gap-3 justify-between items-centerpy-4 px-6 ">
          <div>
            <button
              onClick={() => navigate("/rform")}
              className=" bg-red-600 text-white  hover:bg-red-800 hover:text-white border-y-4 border-x-2 rounded-3xl p-2  text-xs "
            >
              Donate Blood
            </button>
          </div>
          <div>
            <button
              onClick={() => navigate("/form")}
              className=" bg-red-600 text-white  hover:bg-red-800 hover:text-white border-y-4 border-x-2 rounded-3xl  text-xs p-2 "
            >
              Request Bloood
            </button>
          </div>
          <div>
            <a href="/profile">
              <img
                src={logo}
                alt="logo"
                className=" border-2 border-green-200  shadow-black shadow-lg rounded-lg h-9 w-auto"
              />
            </a>
          </div>
          <div className="flex items-center">
            <Bell
              onClick={() => navigate("/notification")}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <nav className="bg-slate-100 font-bold text-black">
        <div className="container mx-auto flex justify-between items-center py-2">
          <ul className="flex space-x-4">
            <li className="flex items-center text-black">
              <a href="/home" className="hover:text-red-500">
                Home
              </a>
            </li>

            <div className="relative dropdown">
              <button
                className="flex items-center hover:text-red-500"
                onClick={handleDropdownToggle}
              >
                Blood Request
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg">
                  <ul>
                    <li
                      onClick={() => navigate("/form")}
                      className="px-4 py-2 hover:bg-red-500 cursor-pointer"
                    >
                      Blood Request Form
                    </li>
                    <li
                      onClick={() => navigate("/repo")}
                      className="px-4 py-2 hover:bg-red-500 cursor-pointer"
                    >
                      Blood Repositary
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative dropdown1">
              <button
                className="flex items-center hover:text-red-500"
                onClick={hdt}
              >
                Blood Donate
              </button>
              {dp && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg">
                  <ul>
                    <li
                      onClick={() => navigate("/rform")}
                      className="px-4 py-2 hover:bg-red-500 cursor-pointer"
                    >
                      Blood Donation Form
                    </li>
                    <li
                      onClick={() => navigate("/eligibility")}
                      className="px-4 py-2 hover:bg-red-500 cursor-pointer"
                    >
                      Check Eligibility
                    </li>
                    <li
                      onClick={() => navigate("/volunteer")}
                      className="px-4 py-2 hover:bg-red-500 cursor-pointer"
                    >
                      Become a Volunteer
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <li className="hidden md:block">
              <a href="/bank" className="  hover:text-red-500">
                Blood Banks
              </a>
            </li>
            <li className="hidden md:block">
              <a href="/blog" className="  hover:text-red-500">
                Blogs
              </a>
            </li>
            <li className="hidden md:block">
              <a href="/about" className="  hover:text-red-500">
                AboutUs
              </a>
            </li>

            <div className="relative dropdown2">
              <button
                className="flex items-center hover:text-red-500"
                onClick={hdt1}
              >
                Resources
              </button>
              {dp1 && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg">
                  <ul>
                    <li
                      onClick={() => navigate("/guide")}
                      className="px-4 py-2 hover:bg-red-500 cursor-pointer"
                    >
                      Guide for Donation
                    </li>
                    <li
                      onClick={() => navigate("/ablood")}
                      className="px-4 py-2 hover:bg-red-500 cursor-pointer"
                    >
                      About Blood
                    </li>
                    <li
                      onClick={() => navigate("/HelpLine")}
                      className="px-4 py-2 hover:bg-red-500 cursor-pointer"
                    >
                      HelpLine
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
