import { Link } from "react-router-dom";
import "./NavbarPro.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/services/">خدمات</Link>
        </li>

        <li>
          <Link to="/shop/">فروشگاه</Link>
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
