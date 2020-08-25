import React, { Component } from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
          <div>
            <p>© {new Date().getFullYear()} Flaconi</p>
          </div>
        </footer>
      </div>
    );
  }
}
