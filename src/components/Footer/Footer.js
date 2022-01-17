import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.linkedin.com/in/aashleebedi/" target="__blank">
          Aashlee Bedi
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://github.com/AashleeBedi" target="__blank">
          <i class="fab fa-github-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/aashleebedi/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.hackerrank.com/aashleebedi02" target="__blank">
          <i class="fab fa-hackerrank fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
