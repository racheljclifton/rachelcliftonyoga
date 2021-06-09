import {useState} from 'react';
import CSSTransition from 'react-transition-group/CSSTransition'

import Category from './Category';
import Shuffle from './Shuffle';
import Draw from './Draw';

const animationTiming = {
    enter: 500,
    exit: 0
  }

const AffirmationDeckForm = (props) => {
    const [formStage, setFormStage] = useState('category');

    return (
        <>
            <CSSTransition in={formStage === "category"} timeout={animationTiming} mountOnEnter unmountOnExit classNames='fade'>
                <Category onSetCategory={setFormStage}/>
            </CSSTransition>
            <CSSTransition in={formStage === "shuffle"} timeout={animationTiming} mountOnEnter unmountOnExit classNames='fade'>
                <Shuffle onShuffle={setFormStage}/>
            </CSSTransition>
            <CSSTransition in={formStage === "draw"} timeout={animationTiming} mountOnEnter unmountOnExit classNames='fade'>
                <Draw onDraw={props.onDraw}/>
            </CSSTransition>
        </>
    )
};

export default AffirmationDeckForm;