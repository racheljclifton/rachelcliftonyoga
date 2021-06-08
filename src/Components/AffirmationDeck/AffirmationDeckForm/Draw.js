import React, { useState, useContext } from "react";
import DeckContext from "../../../store/deck-context";

import Button from "../../UI/Button";

const Draw = (props) => {
  const [drawValue, setDrawValue] = useState("top");

  const ctx = useContext(DeckContext);

  const submitDrawHandler = (event) => {
    event.preventDefault();

    ctx.onSelect(drawValue);
    props.onDraw("card");
  };

  const drawChangeHandler = (event) => {
    setDrawValue(event.target.value);
  };

  return (
    <form onSubmit={submitDrawHandler}>
       <section className='affirmationFormContent'>
      <p className="affirmationFormQuestion">
        From where in the deck would you like to draw your Affirmation Card?
      </p>
      <div onChange={drawChangeHandler}>
        <div>
          <input
            defaultChecked
            type="radio"
            id="top"
            name="drawPlace"
            value="top"
          />
          <label htmlFor="top">Top of the Deck</label>
        </div>
        <div>
          <input type="radio" id="bottom" name="drawPlace" value="bottom" />
          <label htmlFor="bottom">Bottom of the Deck</label>
        </div>
        <div>
          <input type="radio" id="random" name="drawPlace" value="random" />
          <label htmlFor="random">Randomly from the Deck</label>
        </div>
      </div>
      </section>
      <section className="affirmationFormButton">
        <Button type="submit">Draw Your Card</Button>
      </section>
    </form>
  );
};

export default Draw;
