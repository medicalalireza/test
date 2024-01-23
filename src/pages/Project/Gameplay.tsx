import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Gameplay.css";
const Gameplay = () => {
  return (
    <div>
      <h2>بازی ها</h2>
      <div className="container">
        <div className="episode">
          <mark>
            <Link to="voice">اپیزود یک</Link>
          </mark>
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
