import React from "react";

import styles from "./Specialties.module.css";

import Specialty from "./Specialty";

const SPECIALTY_LIST = [
  {
    id: "meditation",
    title: "Meditation",
    description: "Specializing in Medical Meditations",
    details: "",
  },
  {
    id: "yoga",
    title: "Yoga",
    description: "200RYT Specializing in Hatha Yoga and Beginner Yoga",
    details:
      "My beginner class (called Roots) focuses on the fundamentals and create a strong foundation for your practice. Perfect for beginners or those who have been away from their practice for some time, I teach these classes with precise cues and the use of props. I also teach Gentle and Yin yoga and a specialty Yoga for Stress class.",
  },
  {
    id: "aerial",
    title: "Aerial Yoga",
    description: "Certified Aerial Yoga Instructor",
    details:
      "My aerial classes are taught at a beginner level and are a foundational practice perfect for those new to Aerial Yoga. I help you bring balance to your body using aerial silks to work gravity, create space in joints, and lengthen muscles.",
  },
  {
    id: "holistic",
    title: "Holistic Health",
    description: "Certified Holistic Health Educator Specializing in Ayurveda",
    details: "",
  },
];

const Specialties = () => {
  return (
    <div className={styles.list} >
      {SPECIALTY_LIST.map((specialty) => (
        <div className={styles.item} key={specialty.id}>
          <Specialty specialty={specialty}/>
        </div>
      ))}
    </div>
  );
};

export default Specialties;
