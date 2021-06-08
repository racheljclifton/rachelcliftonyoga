import React from "react";

import longLogo from "../../Images/longLogo2.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <img
      className={styles.banner}
      src={longLogo}
      alt="Rachel Clifton Yoga logo banner"
    />
  );
};

export default Header;
