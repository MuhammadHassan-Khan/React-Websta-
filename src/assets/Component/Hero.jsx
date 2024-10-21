import React from "react";
import page from "../image/page1.jpg";
import { Button } from "antd";
import DarkButton from "./Bottun";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  function gotoabout() {
    navigate("/about");
  }

  return (
    <>
  
      <div
        className="hero-section relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${page})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-40">
          <h1 className="text-5xl font-bold text-gray-300 font-serif">
            Welcome to WebsTa
          </h1>
          <p className="mt-4 text-xl font-sans text-gray-300">
            Built a Modren Websites and Apps
          </p>
          <DarkButton text="Want To Know" onClick={gotoabout} />
        </div>
      </div>
    </>
  );
};
