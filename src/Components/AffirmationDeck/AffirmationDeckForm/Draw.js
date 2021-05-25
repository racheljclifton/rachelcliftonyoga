import React, { useState, useContext } from "react";
import DeckContext from "../../../store/deck-context";

import Button from '../../UI/Button';


const Draw = (props) => {
  const [drawValue, setDrawValue] = useState('top')

  const ctx = useContext(DeckContext);

  const submitDrawHandler = (event) => {
    event.preventDefault();

    ctx.onSelect(drawValue);
    props.onDraw("card");
  };

  const drawChangeHandler = (event) => {
    setDrawValue(event.target.value)
  }

  return (
    <form onSubmit={submitDrawHandler}>
      <p>
        From where in the deck would you like to draw your Affirmation Card?
      </p>
      <div onChange={drawChangeHandler}>
        <input
          defaultChecked
          type="radio"
          id="top"
          name="drawPlace"
          value="top"
        />
        <label for="top">Top of the Deck</label>
        <input type="radio" id="bottom" name="drawPlace" value="bottom" />
        <label for="bottom">Bottom of the Deck</label>
        <input type="radio" id="random" name="drawPlace" value="random" />
        <label for="random">Randomly from the Deck</label>
      </div>
      <Button type="submit">Draw Your Card</Button>
    </form>
  );
};

export default Draw;
