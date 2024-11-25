import { useState } from "react";
import "./Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import LogQueryLink from "./LogQueryLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logQuery, setLogQuery] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const adminMenu = () => {
    setLogQuery(!logQuery);
  };

  return (
    <nav className="navbar">
      {logQuery && <LogQueryLink adminMenu={adminMenu} />}
      <div className="logo">
        <img src="/src/assets/logo.png" alt="logo" />
      </div>
      <div className={`menu ${isOpen && "open"}`}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
            <span className="close-btn">
              <CloseIcon
                onClick={toggleMenu}
                style={{ position: "relative", left: "13rem" }}
              />
            </span>
          </li>

          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link onClick={adminMenu}>Admin</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
