import React from "react";

import styles from "./Schedule.module.css";

import scheduleImage from "../../Images/schedule.png";


const Schedule = () => {
  const honorYogaLink =
    "https://www.honoryoga.com/harperspoint/classes/#schedule";
  return (
    <React.Fragment>
      <img
        className={styles.schedule}
        src={scheduleImage}
        alt="Roots at 11:30am on Saturdays at Honor Yoga"
      />
      <p>
        Visit{" "}
        <a href={honorYogaLink} target="_blank" rel="noreferrer">
          Honor Yoga Harper's Point
        </a>{" "}
        for more details and to book your class!
      </p>
    </React.Fragment>
  );
};

export default Schedule;
