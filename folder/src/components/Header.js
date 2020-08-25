import React, { Component } from "react";
import "./Header.css";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="#" className="hamburger"></a>
          <a href="#" className="logo"></a>
          <div>
            <ul>
              <li>
                <FaUser />
              </li>
              <li>
                <FaShoppingCart />
              </li>
              <li>
                <FaHeart />
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
