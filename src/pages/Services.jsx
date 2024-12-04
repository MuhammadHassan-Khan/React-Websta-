import React from 'react'
import { Navbar } from '../assets/Component/Navbar'
import work1 from "../assets/image/Work.png";
import work2 from "../assets/image/Work2.png";
import work3 from "../assets/image/Work3.png";
import work4 from "../assets/image/Work4.png";
import hero from "../assets/image/heropic.jpg"
import random from "../assets/image/random.webp"
import { Footer } from '../assets/Component/Footer';
export const Services = () => {
  return (
    <>
      <Navbar/>
      <div className="services-section bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#231F20] ">
            Our Service
          </h2>
          <p className="text-[#231F20] font-semibold text-center mb-10">
            SEO-friendly solutions tailored to your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            
            
            <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={work1}
                alt="Frontend Development"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
                Frontend Developer
              </h3>
              <p className="text-gray-400 mt-2">
                Building intuitive and responsive user interfaces using modern technologies like React and Tailwind CSS.
              </p>
            </div>
            
          
            <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={random}
                alt="Cloud Management"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
                Data and Cloud Management
              </h3>
              <p className="text-gray-400 mt-2">
                We provide cloud-based solutions for managing data and optimizing business workflows efficiently.
              </p>
            </div>
        
            <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={work2}
                alt="UI/UX Design"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
                UI/UX Designer
              </h3>
              <p className="text-gray-400 mt-2">
                Crafting user-centered designs that ensure seamless experiences across all devices.
              </p>
            </div>
            
            
            <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={work3}
                alt="Backend Development"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
                Backend Developer
              </h3>
              <p className="text-gray-400 mt-2">
                Developing robust, scalable backend systems using Node.js, Express, and MongoDB.
              </p>
            </div>
            
          
            <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={hero}
                alt="Full Stack Development"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
                Full Stack Developer
              </h3>
              <p className="text-gray-400 mt-2">
                Providing end-to-end development services, from frontend design to backend functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
