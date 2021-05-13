import React, { useState } from "react";

import styles from './Specialty.module.css'

import Card from "../UI/Card";

const Specialty = (props) => {
  const [isShowingDetails, setIsShowingDetails] = useState(false);

  const showDetailsHandler = (event) => {
    setIsShowingDetails(true);
  };

  const hideDetailsHandler = (event) => {
    setIsShowingDetails(false);
  };

  return (
    <Card className={styles.specialtyCard}>
      <h2>{props.specialty.title}</h2>
      <p>{props.specialty.description}</p>
      {props.specialty.details !== "" && isShowingDetails === false && (
        <button onClick={showDetailsHandler}>More Details</button>
      )}
      {isShowingDetails === true && (
        <div>
          <p>{props.specialty.details}</p>
          <button onClick={hideDetailsHandler}>Hide Details</button>
        </div>
      )}
    </Card>
  );
};

export default Specialty;
