import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const ShopNav = () => {
  return (
    <nav className="navbar row  bg-white ml-10">
      <div className="col-12 col-md-3 ">
        <div className="navbar-brand"></div>
      </div>

      <div className="col-12 col-md-3 mt-2 pl-10 ml-10 mt-md-0">
        <Search />
      </div>
    </nav>
  );
};

export default ShopNav;
