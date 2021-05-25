import { useContext } from "react";
import DeckContext from "../../store/deck-context";

import Card from "../UI/Card";
import Button from '../UI/Button';


const AffirmationDeckCard = (props) => {
  const ctx = useContext(DeckContext);
  const card = ctx.selectedCard;

  const backToDeckHandler = (event) => {
      ctx.onReset();
      props.onBackToDeck('form');
  }

  return (
    <>
      <Card>
        <h2>{card.category}</h2>
        <p>{card.affirmation}</p>
        <h3>{card.mantra}</h3>
      </Card>
      <Button type="button" onClick={backToDeckHandler}>Back to Deck</Button>
    </>
  );
};

export default AffirmationDeckCard;
