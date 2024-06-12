import React from "react";
import img from "../../assets/img/about.png";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1
          className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0 mr-20
        "
        >
          About Us
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4 font-serif ml-5 font-bold mb-5 ">
          <p className="forced-color-adjust-auto">
            Ordinary Fitness is a community that believes in the power of
            fitness to transform lives. The gym is designed to cater to all
            fitness levels, fostering an inclusive environment. The team of
            experienced trainers is dedicated to guiding individuals through
            their fitness journey.
          </p>

          <p>
            The gym is not just about lifting weights or running on treadmills;
            it's a place where friendships are formed, challenges are conquered,
            and victories celebrated. Ordinary Fitness is a destination for
            transformation, where ordinary becomes exceptional, and a place
            where fitness meets extraordinary living.
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
