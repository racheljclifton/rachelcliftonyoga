import React from "react";
import headerImage from '../Images/header.png';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <img
        className={styles.banner}
        src={headerImage}
        alt="Rachel Clifton Yoga logo banner"
      />
    </div>
  );
};

export default Header;