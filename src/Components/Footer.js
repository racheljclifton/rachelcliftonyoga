import ryt from "../Images/ryt.png";

import styles from "./Footer.module.css";
import Facebook from "./SocialMedia/Facebook";
import Instagram from "./SocialMedia/Instagram";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img
        className={styles.logo}
        src={ryt}
        alt="200 hour Registered Yoga Teacher certification logo"
      />
      <Facebook className={styles.logo} />
      <Instagram className={styles.logo} />
    </div>
  );
};

export default Footer;
