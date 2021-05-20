// import logo from './logo.svg';
import React, {useState} from "react";

import styles from "./App.module.css";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Card from "./Components/UI/Card";

import Home from './Components/Home/Home';
import Schedule from './Components/Schedule/Schedule';
import Music from './Components/MusicFromClass/Music';
import Gallery from './Components/Gallery/Gallery';
import AffirmationDeck from './Components/AffirmationDeck/AffirmationDeck';

function App() {
  const [display, setDisplay] = useState('home')

  const displayHandler = (selectedDisplay) => {
    setDisplay(selectedDisplay);
  }
  return (
    <div className={styles.App}>
      <Card className={styles.mainCard}>
        <div className={styles.Layout}>
        <Header className={styles.Header} />
        <Navigation className={styles.Navigation} onDisplaySelection={displayHandler} selectedDisplay={display}/>
        <div className={styles.Main}>
          {display === 'home' && <Home />}
          {display === 'schedule' && <Schedule />}
          {display === 'music' && <Music />}
          {display ==='gallery' && <Gallery />}
          {display === 'cards' && <AffirmationDeck />}
        </div>
        </div>
      </Card>

    </div>
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
