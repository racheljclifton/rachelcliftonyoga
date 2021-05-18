import React, { useState, Fragment } from "react";

import styles from "./Gallery.module.css";

import Modal from "../UI/Modal";

let initialListOfImages = [];
let listOfImages = [];

const Gallery = () => {
  const [isShowingPicture, setIsShowingPicture] = useState(false);
  // const [modalImageSrc, setModalImageSrc] = useState(undefined);
  const [modalMessage, setModalMessage] = useState('');

  const importAll = (r) => {
    return r.keys().map(r);
  };

  initialListOfImages = importAll(
    require.context("../../Images/Yoga/", false, /\.(png|jpe?g|svg)$/)
  );

  listOfImages = initialListOfImages.reverse();

  const caption = (fileName) => {
    return fileName.match(/(?<=\/)(?!.*\/)[^/]*?(?=\.)/)[0];
  };

  const showPictureHandler = (event) => {
    setIsShowingPicture(true);
    // setModalImageSrc(event.target.currentSrc);
    
    const initialText = caption(event.target.currentSrc);
    const splitText = initialText.split('%20');
    splitText.shift();
    const text = splitText.join(' ');

    setModalMessage(      <Fragment>
      <img src={event.target.currentSrc} alt={text} className={styles.selected} />
      <p>{text}</p>{" "}
    </Fragment>)
  };

  const hidePictureHandler = (event) => {
    setIsShowingPicture(false);
    // setModalImageSrc("");
    setModalMessage('');
  };

  // const setMessage = (url, text) => {
  //   return (
  //     <Fragment>
  //       <img src={url} alt={text} className={styles.selected} />
  //       <p>{text}</p>{" "}
  //     </Fragment>
  //   );
  // };

  // let message; 
  // useEffect(() => {
  //   if (modalImageSrc) {
  //     const text = caption(modalImageSrc);
  //     message = setMessage(modalImageSrc, text);
  //   }
  // }, [modalImageSrc]);

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

  return (
    <>
      <header>
        <h1>Rachel's Yoga Adventures</h1>
      </header>
      <div className={styles.gallery}>
        {listOfImages.map((image, index) => img(image, index))}
      </div>
      {isShowingPicture === true && (
        <Modal onConfirm={hidePictureHandler} message={modalMessage} />
      )}
    </>
  );
};

export default Gallery;
