/** @format */

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBtn = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.nav}>
        SPIRIT
        <div className={styles.nav_links}>
          <a href="/">Home</a>
          <a href="/events">Schedule</a>
          <a href="/contact">Speakers</a>
          <a href="/contact">Events</a>
          <a href="/about">Team</a>
          <button className={styles.button}>
            <a href="/login">Register Now!</a>
          </button>
          {!isOpen && <IoMdMenu onClick={toggleBtn} className={styles.icons} />}
          {isOpen && <IoClose onClick={toggleBtn} className={styles.icons} />}
        </div>
        {isOpen && (
          <div className={styles.menu}>
            <a href="/">Home</a>
            <a href="#">Schedule</a>
            <a href="/contact">Speakers</a>
            <a href="/contact">Events</a>
            <a href="/about">Team</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
