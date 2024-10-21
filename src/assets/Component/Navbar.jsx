import {
  MailOutlined,
  ShoppingOutlined,
  SearchOutlined,
  AppleOutlined,
  PhoneOutlined,
  WarningOutlined
} from "@ant-design/icons";
import React, { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); 

  function forHome() {
    navigate("/");
  }

  function forAbout() {
    navigate("/about");
  }

  function forServices() {
    navigate("/services");
  }

  function forPortfolio() {
    navigate("/portfolio");
  }

  function forBloges() {
    navigate("/bloges");
  }

  function forContact() {
    navigate("/Contact");
  }

  return (
    <>
    
      <nav className="bg-[#1D1D1F] w-full text-sm py-2">
        <div className="flex justify-between items-center px-4 md:px-8">
          
          <div className="text-[#DADADA] font-bold text-xl">WebsTa</div>

          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#DADADA] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

        
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-6`}
          >
            <Button
              type="link"
              className="bg-transparent text-[#DADADA]"
              onClick={forHome}
            >
              Home
            </Button>
            <Button
              type="link"
              className="bg-transparent text-[#DADADA]"
              onClick={forAbout}
            >
              About
            </Button>
            <Button
              type="link"
              className="bg-transparent text-[#DADADA]"
              onClick={forServices}
            >
              Services
            </Button>
            <Button
              type="link"
              className="bg-transparent text-[#DADADA]"
              onClick={forPortfolio}
            >
              Portfolio
            </Button>
            <Button
              type="link"
              className="bg-transparent text-[#DADADA]"
              onClick={forContact}
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};
