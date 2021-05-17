import React from "react";

import welcomeImage from "../../Images/Welcome.png";
import lotus from "../../Images/lotus_teal.png";
import brandImage from "../../Images/brand_image.jpeg";

import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <React.Fragment>
      <div>
        <img
          className={styles.lotus}
          src={lotus}
          alt="Teal lotus flower graphic"
        />
        <img className={styles.welcome} src={welcomeImage} alt="Welcome" />
        <img
          className={styles.lotus}
          src={lotus}
          alt="Teal lotus flower graphic"
        />
      </div>
      <img
        className={styles.photo}
        src={brandImage}
        alt="Rachel sitting in Lotus Pose"
      />
    </React.Fragment>
  );
};

export default Welcome;
