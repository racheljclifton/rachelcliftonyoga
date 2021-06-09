import { useContext } from "react";
import DeckContext from "../../store/deck-context";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AffirmationCard.module.css";
import { CSSTransition } from "react-transition-group";

const AffirmationDeckCard = (props) => {
  const ctx = useContext(DeckContext);
  const card = ctx.selectedCard;

  const backToDeckHandler = (event) => {
    ctx.onReset();
    props.onBackToDeck("form");
  };

  let title = card.category;
  if (card.category === "general") {
    title = "affirmation";
  }

  return (
    <section className={styles.affirmationCard}>
      <CSSTransition in appear timeout={1000} classNames="flip-card">

          <Card className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p>{card.affirmation}</p>
            <h3>{card.mantra}</h3>
          </Card>

      </CSSTransition>
      <div id={styles.button}>
        <Button type="button" onClick={backToDeckHandler}>
          Back to Deck
        </Button>
      </div>
    </section>
  );
};

export default AffirmationDeckCard;
