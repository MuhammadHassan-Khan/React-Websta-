import React from "react";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  PhoneOutlined,
  
} from "@ant-design/icons"; 


export const Footer = () => {
  return (
    <footer className="bg-[#1D1D1F] text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We specialize in building modern, responsive, and efficient web and
            mobile applications for businesses of all sizes.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <MailOutlined className="mr-2" /> email@example.com
            </li>
            <li>
              <PhoneOutlined className="mr-2" /> +123 456 7890
            </li>
          </ul>

          
          <div className="mt-4 flex space-x-4">
            <a
              href="https://github.com/"
              className="hover:text-white text-gray-400"
            >
              <GithubOutlined style={{ fontSize: "24px" }} />
            </a>
            <a
              href="https://linkedin.com/"
              className="hover:text-white text-gray-400"
            >
              <LinkedinOutlined style={{ fontSize: "24px" }} />
            </a>
            <a
              href="mailto:email@example.com"
              className="hover:text-white text-gray-400"
            >
              <MailOutlined style={{ fontSize: "24px" }} />
            </a>
          </div>
        </div>
      </div>

   
      <div className="text-center mt-10 text-sm border-t border-gray-600 pt-6">
        &copy; {new Date().getFullYear()} Websta Software House. Made Of Hassan Khan
      </div>
    </footer>
  );
};
