import React, { useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import styles from "./App.module.css";

import Header from "./Components/Layout/Header";
import Navigation from "./Components/Layout/Navigation";

import Home from "./Components/Home/Home";
import Schedule from "./Components/Schedule/Schedule";
import Music from "./Components/MusicFromClass/Music";
import Gallery from "./Components/Gallery/Gallery";
import AffirmationDeck from "./Components/AffirmationDeck/AffirmationDeck";

import { DeckContextProvider } from "./store/deck-context";

const animationTiming = {
  enter: 500,
  exit: 0
}

function App() {
  const [display, setDisplay] = useState("home");

  const displayHandler = (selectedDisplay) => {
    setDisplay(selectedDisplay);
  };
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.mainCard}>
        {/* <div className={styles.Layout}> */}
        <header className={styles.Header}>
          <Header className={styles.Banner} />
          <Navigation
            className={styles.Nav}
            onDisplaySelection={displayHandler}
            selectedDisplay={display}
          />
        </header>
        <main className={styles.Main}>
          <CSSTransition in={display === "home"} timeout={animationTiming} mountOnEnter unmountOnExit classNames='fade'><Home /></CSSTransition>
          <CSSTransition in={display === "schedule"} timeout={animationTiming} mountOnEnter unmountOnExit classNames='fade'><Schedule /></CSSTransition>
          <CSSTransition in={display === "music"} timeout={animationTiming} mountOnEnter unmountOnExit classNames='fade'><Music /></CSSTransition>
          <CSSTransition in={display === "gallery"} timeout={animationTiming} mountOnEnter unmountOnExit classNames='fade'><Gallery /></CSSTransition>
          <CSSTransition in={display === "cards"} timeout={animationTiming} mountOnEnter unmountOnExit classNames='fade'><DeckContextProvider>
              <AffirmationDeck />
            </DeckContextProvider></CSSTransition>

        </main>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
