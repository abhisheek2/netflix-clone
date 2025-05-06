import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import notification from "../../assets/notification.png";
import search from "../../assets/search.png";
import dropdown from "../../assets/dropdown.png";
import profile from "../../assets/profile.svg";
import { logOut } from "../../firebase";

const Navbar = () => {

  const navRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if (window.scrollY >= 80) {
        navRef.current?.classList.add('nav-dark')
      }
      else {
        navRef.current?.classList.remove('nav-dark')
      }
    })
  },[])


  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="Search" className="icons" />
        <p>Children</p>
        <img src={notification} alt="Notifications" className="icons" />

        <div className="navbar-profile">
          <img src={profile} alt="profile" className="profile " />
          <img src={dropdown} alt="drop-down"  className="profile"/>

          <div className="dropdown">
            <p onClick={()=>{logOut()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
