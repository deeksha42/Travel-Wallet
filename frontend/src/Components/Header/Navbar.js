import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./Menuitems";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";

const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = (name) => {
    // Check if the link clicked is "Logout"
    if (name === "Logout") {
      // Clear user info only if the link clicked is "Logout"
      dispatch(logout());
      navigate("/");
    }

    // Redirect to the clicked link
  };

  return (
    <Container fluid>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Travel Wallet</h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.url}
                onClick={() => handleLogout(item.title)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
