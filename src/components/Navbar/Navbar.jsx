import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        {/* The menu button (hamburger/cross icon) */}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={(e) => {
            // console.log("menuBtn clicked!"); // Keep this for debugging if needed
            // e.stopPropagation(); // Only needed if a parent element is also clickable and overlapping
            setMenuOpen(!menuOpen);
          }}
        />

        {/* The menu items list */}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          // IMPORTANT: Removed the onClick from the <ul> itself.
          // This prevents the whole menu background from closing on any click within it.
        >
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};