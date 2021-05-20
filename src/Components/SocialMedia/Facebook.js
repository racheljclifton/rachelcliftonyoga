import facebook from "../../Images/facebook.png";

import styles from './SocialMedia.module.css';

const Facebook = (props) => {
  const facebookLink = "http://www.facebook.com/rachelcliftonyoga";

  return (
    <a href={facebookLink} target="_blank" rel="noreferrer">
      <img className={`${styles.link} ${props.className}`} src={facebook} alt="Facebook logo" />
    </a>
  );
};

export default Facebook;
