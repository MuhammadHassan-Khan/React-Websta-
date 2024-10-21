import React from "react";
import sideimg from "../assets/image/contactimg.png"; // Assuming your image is stored here
import { Navbar } from "../assets/Component/Navbar";
import { Footer } from "../assets/Component/Footer";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mb-20 mt-10 p-10 bg-[#1D1D1F] text-[#DADADA] rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md bg-[#2C2C2E] border border-[#DADADA] focus:ring focus:ring-[#DADADA] focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 rounded-md bg-[#2C2C2E] border border-[#DADADA] focus:ring focus:ring-[#DADADA] focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  className="w-full p-2 rounded-md bg-[#2C2C2E] border border-[#DADADA] focus:ring focus:ring-[#DADADA] focus:outline-none"
                  placeholder="Enter your message"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#DADADA] text-black px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="relative">
            <img
              src={sideimg}
              className="rounded-2xl object-cover w-full h-full"
              alt="Contact Us"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
