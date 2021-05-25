import React, { useEffect, useState, useCallback, useContext } from "react";
import AffirmationDeckCard from "./AffirmationCard";
import AffirmationDeckForm from "./AffirmationDeckForm/AffirmationDeckForm";
import DeckContext from '../../store/deck-context';

const AffirmationDeck = () => {
  // const [deck, setDeck] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [display, setDisplay] = useState("form");
  // const [selectedCard, setSelectedCard] = useState({});

  const ctx = useContext(DeckContext);
  const onCreate = ctx.onCreate;

  const fetchDeck = useCallback(async () => {
    console.log("fetching deck");
    setIsLoading(true);
    setError(null);
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

  useEffect(() => fetchDeck(), [fetchDeck]);

  // const onDraw = {
  //   setDisplay,
  //   setSelectedCard,
  // };

  let displayContent;
  if (display === "form") {
    displayContent = <AffirmationDeckForm onDraw={setDisplay} />;
  }
  if (display === "card") {
    displayContent = (
      <>
        <AffirmationDeckCard onBackToDeck={setDisplay} />
      </>
    );
  }

  let content;

  if (ctx.deck.length > 0) {
    content = displayContent;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <h1>Virtual Affirmation Deck</h1>
      {content}
    </>
  );
};

export default AffirmationDeck;
