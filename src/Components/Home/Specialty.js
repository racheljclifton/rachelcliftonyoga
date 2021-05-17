import React, { useState } from "react";

import styles from './Specialty.module.css'

import Card from "../UI/Card";
import Modal from '../UI/Modal';

const Specialty = (props) => {
  const [isShowingDetails, setIsShowingDetails] = useState(false);

  const showDetailsHandler = (event) => {
    setIsShowingDetails(true);
  };

  const hideDetailsHandler = (event) => {
    setIsShowingDetails(false);
  };

  const modalMessage = <React.Fragment>
    <p>{props.specialty.description}</p>
    <p>{props.specialty.details}</p>
  </React.Fragment>

  return (
    <Card className={styles.specialtyCard}>
      <h2>{props.specialty.title}</h2>
      <p>{props.specialty.description}</p>
      {props.specialty.details !== "" && isShowingDetails === false && (
        <button onClick={showDetailsHandler}>More Details</button>
      )}
      {isShowingDetails === true && (
        <Modal title={props.specialty.title} message={modalMessage} onConfirm={hideDetailsHandler} />

      )}
    </Card>
  );
};

export default Specialty;
