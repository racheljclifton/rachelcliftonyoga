import React, { useState, useContext } from "react";
import DeckContext from "../../../store/deck-context";

import Button from "../../UI/Button";

import "./AffirmationDeckForm.css";

const Category = (props) => {
  const [selectValue, setSelectValue] = useState("none");
  const ctx = useContext(DeckContext);
  const submitCategoryHandler = (event) => {
    event.preventDefault();
    if (selectValue !== "none") {
      ctx.onFilter(selectValue);
    }
    props.onSetCategory("shuffle");
  };
  const selectChangeHandler = (event) => {
    setSelectValue(event.target.value);
  };
  return (
    <form className='affirmationForm' onSubmit={submitCategoryHandler}>
      <section id='affirmationFormContent'>
      <label htmlFor="category" className="affirmationFormQuestion">
        Would you like to pick an Affirmation Card from a deck with a specific
        category in mind?
      </label>
      <select
        id="category"
        name="category"
        onChange={selectChangeHandler}
        value={selectValue}
      >
        <option value="none">No Category</option>
        <option value="life">Life</option>
        <option value="self love">Self-Love</option>
        <option value="change">Change</option>
        <option value="positive thinking">Positive Thinking</option>
      </select>
      </section>
      <section id="affirmationFormButton">
        <Button type="submit">Select Category</Button>
      </section>
    </form>
  );
};

export default Category;
