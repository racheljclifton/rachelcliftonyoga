import React, { useState } from "react";

const DeckContext = React.createContext({
  deck: [],
  selectedCard: {},
  onCreate: () => {},
  onFilter: (filterCategory) => {},
  onShuffle: (numberOfShuffles) => {},
  onSelect: (drawSelection) => {}
});

export default DeckContext;

export const DeckContextProvider = (props) => {
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  const filterDeckHandler = (filterCategory) => {
    setDeck((prevDeck) => {
        const filteredDeck = prevDeck.filter((card) => card.category === filterCategory)
      return filteredDeck;
    });
  };

  function shuffleDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const shuffleDeckHandler = (numberOfShuffles) => {
    const shuffledDeck = deck.slice(0);
    for (let i = 0; i < numberOfShuffles; i++) {
      shuffleDeck(shuffledDeck);
    }
    setDeck(shuffledDeck);
  };

  const selectCardHandler = (drawSelection) => {
    if (drawSelection === "top") {
      setSelectedCard(deck[0]);
    } else if (drawSelection === "bottom") {
      setSelectedCard(deck[deck.length - 1]);
    } else {
      const random = Math.floor(Math.random() * deck.length);
      setSelectedCard(deck[random]);
    }
  };

  return (
    <DeckContext.Provider
      value={{
        deck: deck,
        selectedCard: selectedCard,
        onCreate: setDeck,
        onFilter: filterDeckHandler,
        onShuffle: shuffleDeckHandler,
        onSelect: selectCardHandler,
      }}
    >
      {props.children}
    </DeckContext.Provider>
  );
};
