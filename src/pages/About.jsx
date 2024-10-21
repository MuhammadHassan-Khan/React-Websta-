import React from "react";
import { Navbar } from "../assets/Component/Navbar";
import { Hero } from "../assets/Component/Hero";
import aboutimg from "../assets/image/about.jpg";
import m1 from "../assets/image/worker.jpg"
import m2 from "../assets/image/worker2.jpg"
import m3 from "../assets/image/worker3.jpg"
import m4 from "../assets/image/worker4.jpg"
import { Footer } from "../assets/Component/Footer";


export const About = () => {
  return (
    <>
      <Navbar />

      <div className="flex container mt-10 grid grid-cols-2 gap-4 bg-[#1D1D1F] text-[#DADADA] p-6 rounded-2xl">
        <div className="relative">
          <img src={aboutimg} className="rounded-2xl" alt="About Us" />
          <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
        </div>
        <div className="">
          <h1>About Us </h1>
          <p>
            At websta, we are passionate about crafting innovative, efficient,
            and user-friendly digital solutions. With a focus on modern web and
            mobile development, we help businesses of all sizes transform their
            ideas into reality. Our team of experienced developers, designers,
            and strategists work closely with clients to build customized
            software that drives growth and streamlines operations. Whether
            you're a startup aiming to make your mark or an established business
            seeking digital transformation, we deliver cutting-edge technology
            tailored to your unique needs. Let us help you unlock new
            opportunities and achieve your goals through our expertise in
            software development, design, and digital strategy.
          </p>
        </div>
      </div>



      <div className="services-section bg-white py-20">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-center text-[#231F20]">Our Team</h2>
    <p className="text-[#231F20] font-semibold text-center mb-10">
      Meet Our Professionals
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
    
      <div className="bg-[#1D1D1F] p-6 rounded-lg shadow-lg text-center">
        <div className="w-40 h-40 mx-auto">
          <img
            src={m1} 
            alt="Professional"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4 text-white">John Doe</h3>
        <p className="text-gray-400 mt-2">Frontend Developer</p>
        <p className="text-gray-400 mt-1">Specializes in React and Tailwind CSS</p>
      </div>

   
      <div className="bg-[#1D1D1F] p-6 rounded-lg shadow-lg text-center">
        <div className="w-40 h-40 mx-auto">
          <img
            src={m2} 
            alt="Professional"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4 text-white">Jane Smith</h3>
        <p className="text-gray-400 mt-2">Backend Developer</p>
        <p className="text-gray-400 mt-1">Expert in Node.js and MongoDB</p>
      </div>

    
      <div className="bg-[#1D1D1F] p-6 rounded-lg shadow-lg text-center">
        <div className="w-40 h-40 mx-auto">
          <img
            src={m3}
            alt="Professional"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4 text-white">Michael Lee</h3>
        <p className="text-gray-400 mt-2">UI/UX Designer</p>
        <p className="text-gray-400 mt-1">Focused on delivering stunning interfaces</p>
      </div>


      <div className="bg-[#1D1D1F] p-6 rounded-lg shadow-lg text-center">
        <div className="w-40 h-40 mx-auto">
          <img
            src={m4}
            alt="Professional"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4 text-white">Emily Brown</h3>
        <p className="text-gray-400 mt-2">Full Stack Developer</p>
        <p className="text-gray-400 mt-1">Proficient in MERN Stack Development</p>
      </div>

    </div>
  </div>
</div>

<Footer/>
    </>
  );
};
