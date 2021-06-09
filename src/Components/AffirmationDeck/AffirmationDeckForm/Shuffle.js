import React, { useState, useContext } from "react";
import DeckContext from "../../../store/deck-context";

import Button from "../../UI/Button";

const Shuffle = (props) => {
  const [shuffleValue, setShuffleValue] = useState(1);

  const ctx = useContext(DeckContext);

  const submitShuffleHandler = (event) => {
    event.preventDefault();

    ctx.onShuffle(shuffleValue);
    props.onShuffle("draw");
  };

  const setShuffleHandler = (event) => {
    setShuffleValue(event.target.value);
  };
  return (
    <form className='affirmationForm'  onSubmit={submitShuffleHandler}>
       <section id='affirmationFormContent'>
      <label htmlFor="shuffle" className="affirmationFormQuestion">
        How many times would you like to shuffle the deck? (1-10)
      </label>
      <input
        onChange={setShuffleHandler}
        id="shuffle"
        type="number"
        min="1"
        max="10"
        value={shuffleValue}
      />
      </section>
      <section id="affirmationFormButton">
        <Button type="submit">Shuffle</Button>
      </section>
    </form>
  );
};

export default Shuffle;
