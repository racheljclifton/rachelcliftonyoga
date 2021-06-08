import React, { useEffect, useState, useCallback, useContext } from "react";
import AffirmationDeckCard from "./AffirmationCard";
import AffirmationDeckForm from "./AffirmationDeckForm/AffirmationDeckForm";
import DeckContext from "../../store/deck-context";

import styles from "./AffirmationDeck.module.css";
import logo from "../../../src/logo.svg";

const AffirmationDeck = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [display, setDisplay] = useState("form");

  const ctx = useContext(DeckContext);
  const onCreate = ctx.onCreate;

  const delay = (n) => new Promise((r) => setTimeout(r, n * 1000));

  const fetchDeck = useCallback(async () => {
    // console.log("fetching deck");
    setIsLoading(true);
    setError(null);
    await delay(0.2);
    try {
      const response = await fetch(
        "https://rachel-clifton-yoga-default-rtdb.firebaseio.com/affirmation-deck.json"
      );
      if (!response.ok) {
        throw new Error(
          "Sorry! There was an issue accessing the Virtual Affirmation Deck."
        );
      }
      const data = await response.json();

      const transformedDeck = [];
      for (const key in data) {
        transformedDeck.push({
          id: key,
          affirmation: data[key].affirmation,
          mantra: data[key].mantra,
          category: data[key].category,
        });
      }
      onCreate(transformedDeck);
    } catch (newError) {
      setError(newError.message);
    }
    setIsLoading(false);
  }, [onCreate]);

  useEffect(() => {
    if (display === "form") {
      fetchDeck();
    }
  }, [fetchDeck, display]);

  let content;
  if (display === "form") {
    content = (
      <>
        <AffirmationDeckForm onDraw={setDisplay} />
      </>
    );
  }
  if (display === "card") {
    content = (
      <>
        <AffirmationDeckCard onBackToDeck={setDisplay} />
      </>
    );
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = (
      <>
        <img className={styles.loading} src={logo} alt="Spinning lotus" />
      </>
    );
  }

  return (
    <>
      {display === "form" && (
        <h1 className={styles.title}>Affirmation Deck</h1>
      )}
      {content}
    </>
  );
};

export default AffirmationDeck;
