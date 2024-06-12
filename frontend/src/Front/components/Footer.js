import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container text-cyan-50  bg-black  ">
      <div className=" flex flex-col md:flex-row justify-between md:px-32 px-5 p-5">
        <div className=" w-full md:w-1/4">
          <Link to="/">
            <h1 className=" font-semibold text-2xl text-brightRed">
              {" "}
              Ordinary Fitness
            </h1>
          </Link>
          <p className=" mt-4">Reject modernity. Embrace masculinity</p>
        </div>
        <div>
          <h1 className=" font-medium text-xl mt-4">Address</h1>
          <p className=" mt-4">
            {" "}
            Colombo 4, 195 2/3 Colombo - Galle Main Rd, Colombo 00400
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl mt-4">Contact</h1>
          <div className=" flex flex-row items-center gap-2 mt-4">
            <AiTwotonePhone size={20} />
            <p>011-011-1111</p>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <AiOutlineMail size={20} />
            <p>ordinaryfitness@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center mt-4">
          @copyright developed by{" "}
          <span className=" text-brightRed">Fitness Geeks</span> | All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
