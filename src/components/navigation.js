import React from "react";
import { Link } from "react-router-dom";
import VYlogo from "../images/VYlogo.png";

const Navigation = () => {
  return (
    <>
      <div className="bg-transparent">
        <Link to="/">
          <button className="w-40 h-20 ml-8 -mt-4">
            <img src={VYlogo} alt="VeggYeahlogo"></img>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
