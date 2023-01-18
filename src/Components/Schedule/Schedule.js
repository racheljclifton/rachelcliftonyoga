import React from "react";

import styles from "./Schedule.module.css";

import scheduleImage from "../../Images/schedule_pic.JPG";

const Schedule = () => {
  // const honorYogaLink =
  //   "https://www.honoryoga.com/harperspoint/classes/#schedule";
  return (
    <section className={styles.schedulePage}>
      <h1 id={styles.header}>Class Schedule</h1>
      <section className={styles.schedule} id={styles.main}>
        <img
          className={styles.pic}
          src={scheduleImage}
          alt="Rachel in triangle pose"
          id={styles.pic}
        />
        <h2 id={styles.class}>Taking a Break</h2>
        <h3 id={styles.date}>I am currently on a teaching hiatus to focus on raising my son.</h3>
        <p id={styles.location}>Hope to return in the future!</p>
      </section>
      {/* <section className={styles.schedule} id={styles.main}>
        <img
          className={styles.pic}
          src={scheduleImage}
          alt="Rachel in triangle pose"
          id={styles.pic}
        />
        <h2 id={styles.class}>Roots</h2>
        <h3 id={styles.date}>Saturdays 11:00am</h3>
        <p id={styles.location}>Honor Yoga Harper's Point</p>
      </section> */}
      {/* <section id={styles.footer}>
        Visit{" "}
        <a href={honorYogaLink} target="_blank" rel="noreferrer">
          Honor Yoga Harper's Point
        </a>{" "}
        for more details and to book your class!
      </section> */}
    </section>
  );
};

export default Schedule;
