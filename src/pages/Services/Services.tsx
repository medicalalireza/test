import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Services.css";

const hotels = [
  { id: 1, name: "هتل پردیسان" },
  { id: 2, name: "هتل پارس" },
  { id: 3, name: "هتل دهانساک" },
];
const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="services">
        <h2 className="title">خدمات</h2>
      </div>
      <div className="container">
        <h2 className="hotel-title">هتل ها</h2>
          {hotels.map((item) => (
            <div className="hotels">
              <Link to={`hotel/${item.id}`}>{item.name}</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
