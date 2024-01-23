import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Project.css";
const Project = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="">بلیت ورودی</h2>
        <div className="game">
          <mark className="opacity">
            به علت ولادت امام علی ورودی <b> {}صلواتی</b> می باشد
          </mark>
          <div className="price">
            <del className="offer">1,000,000 تومان</del>{" "}
            <strong className="free">رایگان</strong>
          </div>
          <Link to="gameplay">ورود به بازی</Link>
        </div>
        <div className="game2"></div>
      </div>
    </div>
  );
};

export default Project;
