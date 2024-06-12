import React from "react";
import Button from "../layouts/Button";
import videoBg from "../../assets/img/ANI.mp4"; // Make sure the path is correct
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FrontHome = () => {
  const { isAuthenticated, user } = useSelector((state) => state.authState);

  return (
    <div className="relative min-h-screen">
      <h1 className="absolute z-10 font-semibold text-center text-white transform -translate-x-1/2 -translate-y-1/2 text-8xl md:w-2/3 top-1/2 left-1/2">
        Push. Persist. Progress. Prevail.
      </h1>
      <div className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        {!isAuthenticated ? (
          <Link to="/login">
            <Button title="Join Now" />
          </Link>
        ) : (
          <Link to="/">
            <Button title="Welcome" />
          </Link>
        )}
      </div>

      <video
        className="absolute top-0 left-0 object-cover w-full h-full bg-video"
        src={videoBg}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-row justify-between min-h-screen px-5 md:px-32">
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-cyan-50">
          {/* Content Goes Here */}
        </div>
      </div>
    </div>
  );
};

export default FrontHome;
