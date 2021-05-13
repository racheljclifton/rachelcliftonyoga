import React, { useState } from "react";

import styles from './Music.module.css';

import Card from "../UI/Card";

const Music = () => {
  const [player, setPlayer] = useState("favorites");
  const namasteURL =
    "https://open.spotify.com/embed/playlist/5GUWfzFVXVoU0HlLNrjelo";
  const shantiURL =
    "https://open.spotify.com/embed/playlist/5lyCYRUo96NuP85J6DH2k1";
  const stressURL =
    "https://open.spotify.com/embed/playlist/3LRoizMcjJhtFHoWQdESPb";
  const favoritesURL =
    "https://open.spotify.com/embed/playlist/7zz0hXaK9mMS3kJsvcKFTH";

  let playerURL = "";

  if (player === "namaste") {
    playerURL = namasteURL;
  } else if (player === "shanti") {
    playerURL = shantiURL;
  } else if (player === "stress") {
    playerURL = stressURL;
  } else if (player === "favorites") {
    playerURL = favoritesURL;
  }

  const playerHandler = (event) => {
    setPlayer(event.target.value);
    console.log(player);
  };

  return (
    <div>
      <h2>Enjoyed the music during class?</h2>
      <h3>Check out my Spotify playlists:</h3>
      <button value="favorites" onClick={playerHandler} className={player === 'favorites' && styles.selected}>
        Rachel's Favorites
      </button>
      <button value="namaste" onClick={playerHandler} className={player === 'namaste' && styles.selected}>
        Namaste Playlist (Aerial & Roots)
      </button>
      <button value="shanti" onClick={playerHandler} className={player === 'shanti' && styles.selected}>
        Shanti Playlist (Gentle & Yin)
      </button>
      <button value="stress" onClick={playerHandler} className={player === 'stress' && styles.selected}>
        Yoga for Stress Playlist
      </button>

        <Card className={styles.playerCard}>
          <iframe
            title="musicPlayer"
            src={playerURL}
            className={styles.player}
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </Card>
    </div>
  );
};

export default Music;
