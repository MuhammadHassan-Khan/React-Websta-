import { Card } from "antd";
import React from "react";
import { Navbar } from "../assets/Component/Navbar";
import { Hero } from "../assets/Component/Hero";
import work1 from "../assets/image/Work.png";
import work2 from "../assets/image/Work2.png";
import work3 from "../assets/image/Work3.png";
import work4 from "../assets/image/Work4.png";
import responsive from "../assets/image/responesive.png";
import boostrap from "../assets/image/boostrap.png";
import html from "../assets/image/html.png";
import javascript from "../assets/image/javascript.png";
import nextjs from "../assets/image/nextjs.png";
import mongodb from "../assets/image/mongodb.png";
import css from "../assets/image/CSS.png";
import firebase from "../assets/image/firebase.png";
import react from "../assets/image/react.png";
import tailwind from "../assets/image/tailwindcss.png";
import { CheckCircleOutlined, CheckOutlined } from "@ant-design/icons";
import { Footer } from "../assets/Component/Footer";


export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="services-section bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#231F20] ">
            Our Work
          </h2>
          <p className=" text-{#231F20} font-semibold text-center mb-10">
            Websites is Developed
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={work1}
                alt="Website Development"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
                Union Steel Development
              </h3>
            </div>
            <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={work2}
                alt="Website Development"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
                Youtube Clone
              </h3>
            </div>

            <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={work3}
                alt="Mobile App Development"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
                Amazone Clone
              </h3>
            </div>

            <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={work4}
                alt="Custom Software"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
                Parking Web{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#231F20] ">
          Website Responsiveness
        </h2>
        <p className=" text-{#231F20} font-semibold text-center mb-10">
          Like This
        </p>
        <div className="mb-10 bg-cover bg-center">
          <img src={responsive} alt="" />
        </div>
      </div>

      <div className="container mx-auto py-10">
        <p className="text-xl font-sans text-[#231F20] text-center">
          We are working on these{" "}
          <span className="font-semibold">Technologies</span>
        </p>

        <div className="overflow-hidden whitespace-nowrap mt-8">
          <div className="inline-flex items-center justify-center animate-scroll">
            <img src={boostrap} alt="Bootstrap" className="h-16 mx-4" />
            <img src={javascript} alt="JavaScript" className="h-16 mx-4" />
            <img src={html} alt="HTML" className="h-16 mx-4" />
            <img src={nextjs} alt="Next.js" className="h-16 mx-4" />
            <img src={react} alt="React" className="h-16 mx-4" />
            <img src={css} alt="CSS" className="h-16 mx-4" />
            <img src={mongodb} alt="MongoDB" className="h-16 mx-4" />
            <img src={firebase} alt="Firebase" className="h-16 mx-4" />
            <img src={tailwind} alt="Tailwind" className="h-16 mx-4" />
          </div>
        </div>
      </div>

      <div className="services-section  bg-white py-20 font-serif">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#231F20] ">
            Pricing Plans
          </h2>
          <p className=" text-{#231F20} font-semibold text-center mb-10">
            Multi feature Plans
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="service-card bg-black p-3 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-center font-semibold mt-4 text-white">
                Local Landing Page
              </h3>
              <h3 className="text-2xl font-serif font-bold  text-center text-white">
                400$
              </h3>
              <p className="text-white text-center py-12 text-[12px]">
                ----------------Feature----------------
              </p>
              <ul className="text-white text-[15px]  ">
                <li><CheckCircleOutlined /> Unlimited access to all features</li>
                <li><CheckCircleOutlined /> Unlimited users</li>
                <li><CheckCircleOutlined /> Dedicated support </li>
                <li><CheckCircleOutlined /> 200 GB storage</li>
                <li><CheckCircleOutlined /> Unlimited access to all features</li>
                <li><CheckCircleOutlined /> Unlimited users</li>
                <li><CheckCircleOutlined /> Dedicated support </li>
                <li><CheckCircleOutlined /> 200 GB storage</li>
              </ul>
            </div>
            <div className="service-card bg-black p-3 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-center font-semibold mt-4 text-white">
                Normal Web
              </h3>
              <h3 className="text-2xl font-serif font-bold  text-center text-white">
                400$
              </h3>
              <p className="text-white text-center py-12 text-[12px]">
                ----------------Feature----------------
              </p>
              <ul className="text-white text-[15px]  ">
                <li><CheckCircleOutlined /> Unlimited access to all features</li>
                <li><CheckCircleOutlined /> Unlimited users</li>
                <li><CheckCircleOutlined /> Dedicated support </li>
                <li><CheckCircleOutlined /> 200 GB storage</li>
                <li><CheckCircleOutlined /> Unlimited access to all features</li>
                <li><CheckCircleOutlined /> Unlimited users</li>
                <li><CheckCircleOutlined /> Dedicated support </li>
                <li><CheckCircleOutlined /> 200 GB storage</li>
              </ul>
            </div>

            <div className="service-card bg-black p-3 rounded-lg shadow-lg">
              <h3 className=" font-serif text-xl text-center font-semibold mt-4 text-white">
                Professional Web
              </h3>
              <h3 className=" font-serif text-2xl font-bold  text-center text-white">
                400$
              </h3>
              <p className="text-white text-center py-12 text-[12px]">
                ----------------Feature----------------
              </p>
              <ul className="text-white text-[15px]">
                <li><CheckCircleOutlined /> Unlimited access to all features</li>
                <li><CheckCircleOutlined /> Unlimited users</li>
                <li><CheckCircleOutlined /> Dedicated support </li>
                <li><CheckCircleOutlined /> 200 GB storage</li>
                <li><CheckCircleOutlined /> Unlimited access to all features</li>
                <li><CheckCircleOutlined /> Unlimited users</li>
                <li><CheckCircleOutlined /> Dedicated support </li>
                <li><CheckCircleOutlined /> 200 GB storage</li>
                <li><CheckCircleOutlined /> Unlimited access to all features</li>
                <li><CheckCircleOutlined /> Unlimited users</li>
                <li><CheckCircleOutlined /> Dedicated support </li>
                <li><CheckCircleOutlined /> 200 GB storage</li>
                <li><CheckCircleOutlined /> Unlimited access to all features</li>
                <li><CheckCircleOutlined /> Unlimited users</li>
                <li><CheckCircleOutlined /> Dedicated support </li>
                <li><CheckCircleOutlined /> 200 GB storage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


<Footer />

   
    </>
  );
};
