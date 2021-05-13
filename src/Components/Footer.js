import ryt from "../Images/ryt.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";

import styles from './Footer.module.css';

const Footer = () => {
  const facebookLink = "http://www.facebook.com/rachelcliftonyoga";
  const instagramLink = "http://www.instagram.com/rachelclifton_yoga";

  return (
    <div className={styles.footer}>
      <img
        className={styles.logo}
        src={ryt}
        alt="200 hour Registered Yoga Teacher certification logo"
      />
      <a href={facebookLink} target="_blank" rel="noreferrer">
        <img className={styles.logo} src={facebook} alt="Facebook logo" />
      </a>
      <a href={instagramLink} target="_blank" rel="noreferrer">
        <img className={styles.logo} src={instagram} alt="Instagram logo" />
      </a>
    </div>
  );
};

export default Footer;
