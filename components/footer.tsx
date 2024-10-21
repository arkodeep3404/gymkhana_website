import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white rounded-lg py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Address Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-lg font-bold">Gymkhana.</h1>
          <p className="mt-2">
            <strong>Address:</strong><br />
            Y2, EP Block, Sector V,<br />
            Bidhannagar, Kolkata,<br />
            West Bengal 700091.
          </p>
        </div>
        
        {/* Contact Section */}
        <div className="w-full md:w-1/2">
          <h2 className="font-semibold">Contact</h2>
          <p>Student Head - 3243242432</p>
          <p>Faculty Head - 3243242432</p>
          <p>Fax - 12313</p>
          <p>Telephone - 033-123213</p>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="border-gray-600 my-6" />

      {/* Copyright & Social Icons */}
      <div className="flex justify-between items-center">
        <p>© Copyright reserved 2025</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebookF size={20} /> {/* Facebook icon from react-icons */}
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaLinkedinIn size={20} /> {/* LinkedIn icon from react-icons */}
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram size={20} /> {/* Instagram icon from react-icons */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
