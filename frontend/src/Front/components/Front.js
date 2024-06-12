import FrontHome from "../components/FrontHome";
import Plans from "../components/Plans";
import About from "../components/About";
import Trainers from "../components/Trainers";
import Contact from "../components/Contact";

import React from "react";

const Front = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <main>
        <div id="home">
          <FrontHome />
        </div>

        <div id="plans">
          <Plans />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="trainers">
          <Trainers />
        </div>

        <div id="contact">
          <Contact />
          <hr />
        </div>
      </main>
    </div>
  );
};

export default Front;
