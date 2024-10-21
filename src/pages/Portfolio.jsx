import React from 'react'
import { Navbar } from '../assets/Component/Navbar'
import work1 from "../assets/image/Work.png";
import work2 from "../assets/image/Work2.png";
import work3 from "../assets/image/Work3.png";
import work4 from "../assets/image/Work4.png";
import port1 from "../assets/image/portfolio1.png";
import port2 from "../assets/image/portfolio2.png";
import port3 from "../assets/image/portfolio3.png";
import { Footer } from '../assets/Component/Footer';



export const Portfolio = () => {
  return (
   <>
   <Navbar />
   <div className="services-section bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#231F20] ">
            Portfolio 
          </h2>
          <p className=" text-{#231F20} font-semibold text-center mb-10">
           letest Work
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
            <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={port1}
                alt="Custom Software"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
               Web Sellling Site
              </h3>
            </div> <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={port2}
                alt="Custom Software"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
              Software Sellling Site
              </h3>
            </div> <div className="service-card bg-[#1D1D1F] p-6 rounded-lg shadow-lg">
              <img
                src={port3}
                alt="Custom Software"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-white">
                Instagram Clone
              </h3>
            </div> 
          </div>
        </div>
      </div>

<Footer />
   
   </>
  )
}
