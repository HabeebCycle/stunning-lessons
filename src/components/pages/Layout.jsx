import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <a href="hjh">Not found</a>
          </li>
        </ul>
      </nav>
      {children}
      <footer>
        <p style={{ textAlign: "center", borderTop: "1px solid purple" }}>
          Copyright &copy; 2022
        </p>
      </footer>
    </>
  );
};

export default Layout;
