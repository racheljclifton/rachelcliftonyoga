import instagram from "../../Images/instagram.png";

import styles from './SocialMedia.module.css';

const Facebook = (props) => {
    const instagramLink = "http://www.instagram.com/rachelclifton_yoga";

  return (
    <a href={instagramLink} target="_blank" rel="noreferrer">
    <img className={`${styles.link} ${props.className}`}  src={instagram} alt="Instagram logo" />
  </a>
  );
};

export default Facebook;