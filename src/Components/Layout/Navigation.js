import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";
import Button from "../UI/Button";
import Facebook from "../SocialMedia/Facebook";
import Instagram from "../SocialMedia/Instagram";

const Navigation = (props) => {
  const displaySelectionHandler = (event) => {
    props.onDisplaySelection(event.target.value);
  };
  return (
    <nav className={styles.navBar}>
      <NavLink activeClassName={styles.selected} to="/" exact>
        <Button value="home">Home</Button>
      </NavLink>
      <NavLink activeClassName={styles.selected} to="/schedule">
        <Button value="schedule">Schedule</Button>
      </NavLink>
      <NavLink activeClassName={styles.selected} to="/music">
        <Button value="music">Music</Button>
      </NavLink>
      <NavLink activeClassName={styles.selected} to="/pictures">
        <Button value="gallery">Pictures</Button>
      </NavLink>
      <NavLink activeClassName={styles.selected} to="/affirmation-deck">
        <Button value="cards">Affirmation Deck</Button>
      </NavLink>
      <section>
        <Facebook className={styles.socialLink} />
        <Instagram className={styles.socialLink} />
      </section>
    </nav>
  );
};

export default Navigation;
