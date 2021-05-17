import React, { useState } from "react";

import styles from "./Gallery.module.css";

// import Modal from "../UI/Modal";

let listOfImages = [];

const Gallery = () => {
//   const [isShowingPicture, setIsShowingPicture] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const importAll = (r) => {
    return r.keys().map(r);
  };

  listOfImages = importAll(
    require.context("../../Images/Yoga/", false, /\.(png|jpe?g|svg)$/)
  );

  const showPictureHandler = (event) => {
    // setIsShowingPicture(true);
    setModalImageSrc(event.target.currentSrc);
  };

  const hidePictureHandler = (event) => {
    // setIsShowingPicture(false);
    setModalImageSrc('');
  };

  return (
    <>
      <header>
        <h1>Rachel's Yoga Adventures
        </h1>
      </header>
      <div className={styles.gallery}>
        {listOfImages.map((image, index) => (
          <img
            key={index}
            onClick={modalImageSrc.includes(image.default) ? hidePictureHandler : showPictureHandler}
            value={image.default}
            src={image.default}
            alt="Rachel doing yoga"
            className={`${styles.picture} ${modalImageSrc.includes(image.default) && styles.selected}`}
          />
        ))}
      </div>
      {/* {isShowingPicture === true && (
        <Modal onConfirm={hidePictureHandler} title="Rachel doing yoga">
          <div>
            <img src={modalImageSrc} alt="Rachel doing yoga" />
          </div>
        </Modal>
      )} */}
    </>
  );
};

export default Gallery;
