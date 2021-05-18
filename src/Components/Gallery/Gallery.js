import React, { useState, Fragment } from "react";

import styles from "./Gallery.module.css";

import Modal from "../UI/Modal";

let initialListOfImages = [];
let listOfImages = [];

const Gallery = () => {
  const [isShowingPicture, setIsShowingPicture] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const importAll = (r) => {
    return r.keys().map(r);
  };

  initialListOfImages = importAll(
    require.context("../../Images/Yoga/", false, /\.(png|jpe?g|svg)$/)
  );

  listOfImages = initialListOfImages.reverse();

  const showPictureHandler = (event) => {
    setIsShowingPicture(true);
    setModalImageSrc(event.target.currentSrc);
  };

  const hidePictureHandler = (event) => {
    setIsShowingPicture(false);
    setModalImageSrc("");
  };

  const caption = (fileName) => {
    return fileName.match(/(?<=\/)(?!.*\/)[^\/]*?(?=\.)/)[0];
  };

  const img = (image, index) => {
    return (
      <img
        key={index}
        onClick={showPictureHandler}
        value={image.default}
        src={image.default}
        alt={caption(image.default)}
        className={styles.picture}
      />
    );
  };

  // const message =

  return (
    <>
      <header>
        <h1>Rachel's Yoga Adventures</h1>
      </header>
      <div className={styles.gallery}>
        {listOfImages.map((image, index) => img(image, index))}
      </div>
      {isShowingPicture === true && (
        <Modal
          onConfirm={hidePictureHandler}
          message={
            <img
              src={modalImageSrc}
              alt={caption(modalImageSrc)}
              className={styles.selected}
            />
          }
        />
      )}
    </>
  );
};

export default Gallery;
