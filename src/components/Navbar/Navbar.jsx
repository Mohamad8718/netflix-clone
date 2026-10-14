import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <nav ref={navRef} className="nav">
      <div className="nav__left">
        <img src={logo} alt="" className="nav__logo" />
        <ul className="nav__links">
          <li className="nav__link">Home</li>
          <li className="nav__link">TV Shows</li>
          <li className="nav__link">Movies</li>
          <li className="nav__link">New & Popular</li>
          <li className="nav__link">My List</li>
          <li className="nav__link">Browse by Languages</li>
        </ul>
      </div>
      <div className="nav__right">
        <img src={search_icon} alt="" className="nav__right__icon" />
        <p className="nav__right__para-">Children</p>
        <img src={bell_icon} alt="" className="nav__right__icon" />
        <div className="nav__right__profile">
          <img src={profile_img} alt="" className="nav__right__profile__img" />
          <img src={caret_icon} alt="" />
          <div className="nav__right__dropdown">
            <p
              onClick={() => {
                logout();
              }}
              className="nav__right__dropdown__para"
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
