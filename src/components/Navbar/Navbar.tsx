import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">خانه</Link>
        </li>
        <li>
          <Link to="/services/">خدمات</Link>
        </li>

        <li className="active">
          <Link to="/contactus">تماس با ما</Link>
        </li>

        <li className="active">
          <Link to="/project/">برای مردن آماده ای؟</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
