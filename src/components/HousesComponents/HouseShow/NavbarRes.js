"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { Divider } from "@mui/material";
import "./Navbar.css";

export default function NavbarRes() {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="navHeader">
        <nav className="navbar">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                className="link"
                to="image"
                spy={true}
                smooth={true}
                offset={155}
                duration={500}
                onClick={closeMenu}
              >
                تصاویر
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="link"
                to="information"
                spy={true}
                smooth={true}
                offset={-177}
                duration={500}
                onClick={closeMenu}
              >
                مشخصات
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="link"
                to="rules"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                قوانین
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="link"
                to="comments"
                spy={true}
                smooth={true}
                offset={-95}
                duration={500}
                onClick={closeMenu}
              >
                نظرات
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Divider
        sx={{
          marginBottom: "24px",
        }}
      />
    </>
  );
}
