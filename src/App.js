import React, { useState } from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import styles from "./App.module.css";

import Header from "./Components/Layout/Header";
import Navigation from "./Components/Layout/Navigation";

import Home from "./Components/Home/Home";
import Schedule from "./Components/Schedule/Schedule";
import Music from "./Components/MusicFromClass/Music";
import Gallery from "./Components/Gallery/Gallery";
import AffirmationDeck from "./Components/AffirmationDeck/AffirmationDeck";

import { DeckContextProvider } from "./store/deck-context";

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

            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/schedule">
                <Schedule />
              </Route>
              <Route path="/music">
                <Music />
              </Route>
              <Route path="/pictures">
                <Gallery />
              </Route>
              <Route path="/affirmation-deck">
                <DeckContextProvider>
                  <AffirmationDeck />
                </DeckContextProvider>
              </Route>
            </AnimatedSwitch>
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
